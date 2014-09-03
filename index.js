var _ = require('underscore')

module.exports = parseCss

function parseCss(src, cb){
  var lines = src.split(/\n/)
  var blocks = []
  _.each(lines, function(line, i){
    // todo: regard comments
    // todo: better comprehension
    if (!line) {
      // noop
    } else if (/\{/.test(line)) {
      var selector = line.replace(/^\s+|\s*\{\s*$/g, '')
      // todo: regard sequence
      var block = [selector, {}]
      blocks.push(block)
    } else if (/\}/.test(line)) {
      // noop
    } else if (/: /.test(line)) {
      var match = /\s*([^\s:]+)\s*:\s*([^;]+)/.exec(line)
      var key = match[1]
      var value = match[2]
      var block = _.last(blocks)
      var attrs =  block[1]
      attrs[key] = value
    } else if (/\,\s*$/.test(line)) {
      lines[i + 1] = line + ' ' + lines[i + 1]
    } else {
      return cb(new Error('invalid line'))
    }
  })
  cb(null, blocks)
}
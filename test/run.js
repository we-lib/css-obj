var fs = require('fs')
var path = require('path')
var assert = require('assert')
var _ = require('underscore')
var parseCss = require('..')

var css = readFile('./style.css')
var expected = require('./expected.js')

runTest()

function runTest(){
  parseCss(css, function(err, obj){
    assert(_.isEqual(obj, expected))
    console.log('test passed')
  })
}

function readFile(file){
  file = path.resolve(__dirname, file)
  return fs.readFileSync(file).toString()
}
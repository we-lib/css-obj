# css-obj

Parse css to js obj model

> It is very simple right now

It requires:

- no comments
- one space before `{`
- `}` or one key/value pair in each line
- strictly `{key}: {value};`
- so on ..

## Usage

Source:

```css
.hidden {
  display: none;
}
a:hover,
.btn.active {
  display: block;
  color: yellow;
}
```

Parsing:

```js
var parseCss = require('css-obj')
parseCss(css, function(err, obj){
  console.log(obj)
})
```

Outputs:

```js
[
  [
    '.hidden', {
      'display': 'none'
    }
  ],
  [
    'a:hover, .btn.active', {
      'display': 'block',
      'color': 'yellow'
    }
  ]
]
```
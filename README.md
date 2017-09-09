# [`key-as`](https://www.npmjs.com/package/key-as)
Create a new object from keys and fill value. [#javascript](https://www.npmjs.com/~ryanve)

```
npm install key-as
```

## API

### `keyAs(keys, value: undefined)`

- `keys` is the array(-like) list of keys you want to use
- `value` is an optional value for which to fill all keys with
- Return is a new plain object with each key set to `value`

## Usage

#### `import` or `require`

```js
import keyAs from "key-as"
```

```js
const keyAs = require("key-as")
```

### Examples

#### Stub keys

```js
keyAs(["red", "blue"]) // {red: undefined, blue: undefined}
keyAs(["red", "blue"], null) // {red: null, blue: null}
```

#### Scalar fill

```js
keyAs(["red", "blue"], 0) // {red: 0, blue: 0}
keyAs(["red", "blue"], 1) // {red: 1, blue: 1}
```

#### Reference fill

```js
const noop = function() {}
const hook = keyAs(["start", "stop"], noop) // {start: noop, stop: noop}
hook.start === hook.stop // true
```

#### Alias keys

```js
const Batman = keyAs(["Batman", "The Dark Knight", "Caped Crusader"], "Bruce Wayne")
/* {
  "Batman": "Bruce Wayne",
  "The Dark Knight": "Bruce Wayne",
  "Caped Crusader": "Bruce Wayne",
} */
```

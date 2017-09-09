function keyAs(keys, value) {
  var o = {}
  var i = 0
  var l = keys.length
  while (i < l) o[keys[i++]] = value
  return o
}

module.exports = keyAs;

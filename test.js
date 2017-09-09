var keyAs = require("./");
var assert = require("assert")
var blankValue
var truthValue = {}
var letterValue = {}
var truth = { keyOne: truthValue, keyTwo: truthValue }
var blank = { keyThree: blankValue, keyFour: blankValue }
var letter = { a: letterValue, b: letterValue, c: letterValue }
var letterCopy = keyAs(Object.keys(letter).join(""), letterValue)
var truthCopy = keyAs(Object.keys(truth), truthValue)
var blankCopy = keyAs(Object.keys(blank), blankValue)
var blankVacant = keyAs(Object.keys(blank))
var emptyResult = keyAs([])

assert.deepStrictEqual(emptyResult, {}, "Expected empty plain object")
assert.deepStrictEqual(blankVacant, blank, "Expected undefined values")
assert.deepStrictEqual(truthCopy, truth, "Expected truth deep equality")
assert.deepStrictEqual(blankCopy, blank, "Expected blank deep equality")
assert.deepStrictEqual(letterCopy, letter, "Expected character keys")
assert.notStrictEqual(truthCopy, truth, "Expected truth copy")
assert.notStrictEqual(blankCopy, blank, "Expected blank copy")
assert.throws(function() {
  keyAs()
})

console.log("Ok =)");

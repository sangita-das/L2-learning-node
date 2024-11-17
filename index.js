// local modules
const {a, add} = require('./local-1')
const {a: a2, add: add2} = require('./local-2')

console.log(a2,add2(2,3, 5))

// built-in-modules
const path = require ("path")
console.log(path.parse("/G:/web development course jhankar mahabub vai/Next Level Web-Dev/learning-node/index.js"))
const util = require('./modules/mymodules')
const getCurrentTime = require('./modules/mymodules').getCurrentTime
const plus = require('./modules/mymodules').add

console.log(getCurrentTime())
console.log(util.add(20,40))

console.log(plus(800,50))

const number = 50000000
console.log(util.formatNumber(number))
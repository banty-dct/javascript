const n1 = '125'
const n2 = '131.75'
const n3 = 12.35
const n4 = 17

//convert number (int) to number (float)
console.log(parseFloat(n4)) //17
console.log(parseFloat('Hello World')) //NAN

//convert number (str) to number (float)
console.log(parseFloat(n1)) //125
console.log(parseFloat(n2)) //131.75

//convert number (float) to number (int)
console.log(parseInt(n3)) //12
console.log(parseInt("Hello World")) //NAN

//convert number (str) to number (int)
console.log(parseInt(n1)) //125
console.log(parseInt(n2)) //131
//*****
console.log(Number(n2)) //131

//convert number (int/float) to number (str)
console.log(String(n3)) // '12.35'
console.log("" + n4) //'17'

const a1 = 10, a2 = 20, a3 = 30

console.log(0.2 + 0.1)
console.log((0.2 * 10 + 0.1 * 10) / 10)

console.log(new Date())
let new_time = Number(new Date())

console.log(new_time)

console.log(new Date(new_time))
const password = 'secret123'
const userName = 'arjun'
const lastName = 'nagaraj'
//const email = new String()

console.log(password.length)
console.log(userName.toUpperCase()) 
console.log(userName)

console.log(lastName.toLowerCase())
console.log(lastName.indexOf('a')) //1
console.log(lastName.lastIndexOf('a')) //5
console.log(lastName.indexOf('z')) //-1

console.log(userName.indexOf('rj')) //1
console.log(userName.includes('rj')) //true
console.log(userName.includes('z')) //false

console.log(userName.charAt(0))
console.log(userName.charAt(2))

//string are array of characters
console.log(userName[0])
console.log(userName[1])
console.log(userName[2])

for (let i = 0; i < userName.length; i++) {
    console.log(userName[i]);
}

const source = 'bangalore'
const destination = 'mysore'
const kms = 150

//ES6 - Template Strings / Template Literals
//Syntatical Sugar

console.log(`The distance between ${source} and ${destination} is ${kms + 12} kms.`)
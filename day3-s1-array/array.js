const players = []
console.log(players)
console.log(typeof players) // object
console.log(Array.isArray(players)) // true

const fruits = new Array()
console.log(fruits)

const person = {
    firstname   : 'arjun',
    city        : 'bangalore'
}
console.log(typeof person) // object
console.log(Array.isArray(person)) // false

//array is ordered, integer indexed, collection of values

const places = ['jayanagar','btm','kormanagla']
console.log(places)

//value / element means same
console.log(places[0]) // jayanagar
console.log(places[1]) // btm
console.log(places[2]) // kormangala
console.log(places[3]) // undefined

//properties
console.log(places.length) //3

//last element in an array will be length-1
console.log(places[places.length-1]) // kormangala

places[1] = 'btm layout'
console.log(places)

//methods - mutable methods

//adding elements to the end of an array
console.log(places.push('bsk'))
console.log(places)

//add elements to the beginning of an array
places.unshift('gandhi bazaar')
console.log(places)

//add elements to specific index
places.splice(2,0,'jp nagar')
console.log(places)

//remove elements to specific index
places.pop()
console.log(places)

//remove elements from the beginning of an array
places.shift()
console.log(places)

//remove elements from a specific index
places.splice(1,2)
console.log(places)

const mixedArray = [
    'bangalore',
    23,
    [
        'jayanagar',
        'btm'
    ],
    {
        state: 'karnataka'
    },
    function(){
        return 'abcd';
    }
]
console.log(mixedArray[0])
console.log(mixedArray[2][0])
console.log(mixedArray[3].state)
console.log(mixedArray[4]()) //function

//methods - imutable methods

//array to string 
console.log(places.join(", "))
console.log(places)

const numbers = [10,11,12,13,14,15,16,17,18,19]

console.log(numbers.lastIndexOf(0,3)) // [10,11,12]
console.log(numbers.slice(5)) // [15,16,17,18,19]

//to check value is present
console.log(numbers.indexOf(15)) // 5
console.log(numbers.indexOf(25)) // -1
console.log(numbers.indexOf()) // -1

//boolean methods to check availability of a value
console.log(numbers.includes(10)) // true
console.log(numbers.includes(25)) // false

//adding arrays in js - concat returns a new array
console.log([10,20] + [30,40])
console.log([10,20].concat([30,40]))
console.log([10,20].concat([30,40]).concat([30,40]))

//array of functions
const greetings = [
    function(){
        return "hello"
    },
    function(){
        return "hello there"
    },
    function greet(){
        return "hey"
    }
]
console.log(greetings[2]())
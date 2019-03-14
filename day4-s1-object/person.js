const person = {
    //key: value
    //property: value
    firstName: 'arjun',
    lastName: 'n'
}

console.log(person.firstName)
console.log(person['lastName'])

//object methods
console.log(Object.keys(person)) // ['firstName','lastName']
console.log(Object.values(person)) // ['arjun','n']

//property is present on object

//if calling a prop returs undefined, then prop is not present in obj
console.log(person.city) // undefined

console.log(Object.keys(person).includes('city')) //false
console.log(Object.keys(person).indexOf('firstName') >= 0) //true
console.log(person.hasOwnProperty('lastName')) //true

//determine total k:v pairs in object
console.log(Object.keys(person).length)
console.log(person)

//determine if object is object
console.log(Array.isArray(person)) //false

//array - push, unshift, splice

//add a new k:v pair in object
person.city = 'bangalore'
person.lastName = 'nagaranjan'
console.log(person)

//delete a k:v pair
delete person.city
console.log(person)


//for loop - object
const person1 = {
    first: 'Arjun',
    last: 'Reddy'
}
for(const prop in person1){
    console.log(prop,person1[prop])
}
//whenever property of an object is made available via a variable we have to use the [] notation

const random = 'first'
console.log(person[random])
const person = {
    firstName: 'arjun',
    age: 21,
    city: 'bangalore',
    skills: ['js','rb','py'],
    //when a prop insode an obj, holds a function, its known as a method
    details: function(){
        return `${this.firstName} - ${this.age} - ${this.city}`
    }
}

console.log(person.details())

const numbers = [10,20,30]

//properties
console.log(numbers.length)

//methods
numbers.push(40)
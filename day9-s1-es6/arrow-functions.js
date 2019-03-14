//can be used for anonymous functions, function expressions
//arrow functions can not be used for function declaration

//es5
var add  = function(){

}

//es6
const sum = (n1,n2) => {
    return n1 + n2
}
console.log(sum(10,20))

//function expression, foreach, find, filter, event handlers or any method that takes a callback function (i,e map, some, every, reduce)

const numbers = [10,15,20,25]

//es5
// numbers.forEach(function(n){
//     console.log(n)
// })

//es6
// numbers.forEach((n) => {
//     console.log(n)
// })

//if the parameter to the function is only 1, we can eliminate ()
// numbers.forEach(n => {
//     console.log(n)
// })

//if the parameter to the function is only 1 and there is only 1 statement to execute, we can eliminate () and {}
numbers.forEach(n => console.log(n))

//console.log(numbers.filter(n => n % 2 == 0))
var numbers = [10,20,30,40,50]

//es5
var n1 = numbers[0]
var n2 = numbers[1]

//es6
const [a1,a2] = numbers
console.log(a1,a2)

const [b1,,b2] = numbers
console.log(b1,b2)

const [,,c1] = numbers
console.log(c1)

function oddEvens(numbers){
    const evens = []
    const odds = []
    numbers.forEach(function(number){
        if(number % 2 == 0){
            evens.push(number)
        }else{
            odds.push(number)
        }
    })
    return [ evens, odds ]
}

//if multiple values have to be returned from a function, then it should return either as an object or an array
const [ evens, odds ] = oddEvens([10,20,15,25])
console.log(`odds are ${odds}`)
console.log(`evens are ${evens}`)
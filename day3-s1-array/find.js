const numbers = [10,20,30,40,50]

console.log(numbers.indexOf(20) >= 0) //true
console.log(numbers.includes(20)) // true

//c style
function findGreater25(numbers){
    let number
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 25){
            number = numbers[i]
            break
        }
    }
    return number
}

const result = findGreater25(numbers) // 30
console.log(result)

//js style
const result1 = numbers.find(function(n){
    return n > 20
})
console.log(result) // 30

console.log(numbers.find(n => n > 25)) // 30
const numbers = [10,15,20,25,30]

//c style
function findEvens(numbers){
    const even = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            even.push(numbers[i])
        }
    }
    return even
}

const result = findEvens(numbers) // [10,20,30]
console.log(result)

//js style
const result1 = numbers.filter(function(n){
    return n % 2 == 0
})
console.log(result1)

//es6
console.log(numbers.filter(n => n % 2 == 0))

//
const menus = [
    { id: 1, name: 'veg biryani', isVeg: true, price: 220 },
    { id: 2, name: 'chicken biryani', isVeg: false, price: 280 },
    { id: 3, name: 'chilly chicken', isVeg: false, price: 230 }
]

console.log(menus.length)
console.log(menus.filter(item => item.isVeg == false))
const fruits = ['apple','mango']

//1st way
console.log("----- for -----")
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i].toUpperCase())
}

//2nd way
console.log("----- forEach -----")
fruits.forEach(function(fruit, index){
    console.log(index, fruit.toUpperCase())
})

//3rd way
console.log("----- for of -----")
for(const fruit of fruits){
    console.log(fruit.toUpperCase())
}

const person = {
    name: 'Banty',
    city: 'Bangalore',
    country: 'India',
    bio: 'Some Bio'
}

const { name, city, country, bio } = person
console.log(name, bio, city, country)

//give alias to the property name
const { name: firstName, city: cityName } = person
console.log(firstName, cityName)

//give default values if props dont exist
const { occupation = 'SE' } = person
console.log(occupation)

//give alias and set default value
const { state: stateName = 'SE' } = person
console.log(stateName)


// const city = {
//     info: {
//         name: 'bangalore',
//         min: 10,
//         max: 30
//     }
// }
// const { name, min, max } = city.info
// console.log(name, min, max)

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
    return { evens, odds }
}

//if multiple values have to be returned from a function, then it should return either as an object or an array
const { evens, odds } = oddEvens([10,20,15,25])
console.log(`odds are ${odds}`)
console.log(`evens are ${evens}`)
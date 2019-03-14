//multiple values can be returned from a function either as an array or an object 
function evenOdds(num){
    let evens = [], odds = []
    num.forEach(function(n){
        if(n % 2 == 0){
            evens.push(n)
        }else{
            odds.push(n)
        }
    })
    //return [evens,odds]
    //concide object properties - es6
    //if the property name and the variable name is the same, we can eliminate using the property
    return {
        evens, // evens: evens
        odds // odds: odds
    }
}

console.log(evenOdds([10,20,21,31]))
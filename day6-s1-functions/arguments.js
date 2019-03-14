//functions that accepts variable number of arguments
//ex - push(1,20), Math.min(10,20)

function add(){

    //arguments obj will hold the values in key:value pair of the arguments passed
    //console.log(arguments)

    let total = 0

    // for(let i = 0; i < arguments.length; i++){
    //     total += arguments[i]
    // }
    
    for(const key in arguments){
        total += arguments[key]
    }
    return total
}
console.log(add(10,20))
console.log(add(10,20,30,40,50))
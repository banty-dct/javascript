//
function add(n1,n2){ // n1 = undefined, n2 = undefined
    return n1 + n2
}
console.log(add()) // NaN

function sum(n1,n2){
    return n1 + n2
}
//additional arguments passsed will be ignored
console.log(sum(10,20,40)) // 30

function total(n1,n2){
    return n1 + n2
}
console.log(total(10)) // NaN
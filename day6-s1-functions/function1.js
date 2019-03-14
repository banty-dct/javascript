//variables declared outside the function, become global variables in JS
let n1 = 10
let n2 = 20

function add(){
    return n1 + n2
}

console.log(add()) //30
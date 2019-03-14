function add(){
    //block scope
    let n1 = 100
    let n2 = 200
    return n1 + n2
}

console.log(add()) // 300

//a variable DECLARED within a function, is available only inside the function

//console.log(n1,n2) // reference error, n1,n2 undefined
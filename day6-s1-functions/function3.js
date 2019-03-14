function add(){
    //if a variable is assigned to value and if the variable is not there in FS nor the GS then, that variable is created in GS
    n1 = 100
    n2 = 200
    return n1 + n2
}

//console.log(n1,n2)

console.log(add()) // 300
console.log(n1,n2) // 100,200
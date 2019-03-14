//function scope - var
function number() {
    var n1 = 10
    var n2 = 20
    if (n1 > n2) {
        var msg = 'n1 is greater'
    } else {
        var msg = 'n2 is greater'
    }
    console.log(msg)
}
number()

//block scope - let & const
function number1() {
    let a1 = 10
    let a2 = 20
    if (a1 > a2) {
        let result = "a1 is greater"
    } else {
        let result = "a2 is greater"
    }
    //can't use result outside of block
    //console.log(result)
}
number1()

function number2() {
    let a3 = 10
    let a4 = 20
    let result
    if (a3 > a4) {
        result = "a3 is greater"
    } else {
        result = "a4 is greater"
    }
    //now can use result outside of block
    console.log(result)
}
number2()
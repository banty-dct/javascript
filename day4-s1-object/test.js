function frequency(a){
    let myObj = {}
    for (let i = 0; i < a.length; i++){
        if(a[i] != ' '){
            if (myObj.hasOwnProperty(a[i])) {
                myObj[a[i]] = myObj[a[i]] + 1
            } else {
                myObj[a[i]] = 1
            }
        }
    }
    return myObj
}
console.log(frequency('biswajeet maharana'))
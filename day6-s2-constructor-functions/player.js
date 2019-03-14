const numbers = []

//Object Constructor Function / Object Prototype Function
//aka class
//proerties & methods to be made available for objects based on function / type

function Player(name, runs){
    this.name = name
    this.runs = runs
    //instance method
    this.calAvg = function(){
        let total = 0
        for(let i = 0; i < this.runs.length; i++){
            total += this.runs[i]
        }
        return total/this.runs.length
    }
}

//instance // object
const p1 = new Player('Virat',[30,59,90]) //p1 is object/instance of Player type
console.log(p1.name, p1.runs)
console.log(p1)
console.log(p1.calAvg())
console.log(typeof p1) // 'object'

console.log(p1 instanceof Player) //true
console.log(numbers instanceof Player) //false

const p2 = new Player('Sachin',[100,22,94])
console.log(p2.name)
console.log(p2.calAvg())

//static method
Player.isPlayer = function(val){
    return val instanceof Player
}
console.log(Player.isPlayer(p1)) //Array.isArray()
console.log(Player.isPlayer(numbers)) //false

//Create - Instance ---- if we have reference to an object
//Read / Update / Delete - Static ---- if we dont have reference to an object / directly
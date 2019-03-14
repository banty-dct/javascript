var city = 'bangalore';
//re-assign
city = 'bangalore';
//re-declare
var city = 'pune';


//ES6

let city1 = 'bangalore';
//re-assign
city1 = 'bangalore';
//can'ot re-declare
//let city1 = 'pune';


//ES6

const city2 = 'bangalore';
//can't re-assign
//city2 = 'bangalore';
//can'ot re-declare
//const city2 = 'pune';

const city3 =[10, 20, 30];
city3.push(40);
console.log(city3);

Object.freeze(city3); //no change
//can't change after freeze
//city3.push(50);
//console.log(city3);
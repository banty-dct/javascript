const username = 'baanTy'
//Capitalize String
console.log(username[0].toUpperCase() + username.slice(1).toLowerCase());

const number = '1234567890';
//(123) 456-7890

//1. Using Slice With Concatination

const first = number.slice(0, 3); //index 0 to index 2
const second = number.slice(3, 6);
const third = number.slice(6); //from index 6
console.log('(' + first + ') ' + second + '-' + third);

//2. Using Slice With ES6
console.log(`(${first}) ${second}-${third}`)

//3. Using Substr
const first1 = number.substr(0, 3);
const second2 = number.substr(3, 3);
const third3 = number.substr(6);
console.log('(' + first1 + ') ' + second2 + '-' + third3);

//Replace
console.log(username.replace("aa","u"))
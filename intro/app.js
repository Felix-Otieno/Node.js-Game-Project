const _ = require('lodash');

let randomNum1 = _.random(10);
let randomNum2 = _.random(1,100);

console.log(randomNum1);
console.log(randomNum2);

let myArray = ["Apple", "Orange", "Mango", "ThornMelon"];
let randomItem = _.sample(myArray);
console.log(myArray);
console.log(randomItem);
console.log(_.shuffle(myArray));

let counter = 0;
_.times(10, function() {
 counter++;
 console.log(counter);
});

let array2 = _.map(myArray, function(item) {
     console.log(item);
     return item.toUpperCase();
});
console.log(array2);
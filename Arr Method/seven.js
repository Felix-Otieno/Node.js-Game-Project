const numbers = [10, 20, 30];
let number;
while ((number = numbers.shift()) != undefined) {
  console.log(number);
}
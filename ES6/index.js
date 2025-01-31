// Import named exports
import { add, subtract } from './main.js';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6

// Import default export (you can give it any name)
import multiply from './main.js';

console.log(multiply(6, 2));  // 12

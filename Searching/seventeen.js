let str = 'I like yellow color palette!';

let re = /(?<color>yellow) color/;
let result = str.match(re);

console.log(result);

const url = require('url');

const myUrl = new URL('https://example.com/path?name=Felix&age=25');

console.log(myUrl.hostname);  // example.com
console.log(myUrl.pathname);  // /path
console.log(myUrl.searchParams.get('name'));  // Felix

const fs = require('fs');

// Read Files
/*fs.readFile('./docs/blog1.txt', (err, data) => {
   if (err) {
    console.log(err);
   }
   console.log(data.toString());
});
console.log("Last Line");
*/

// Write Files
/*fs.writeFile('./docs/blog1.txt', 'Hello, World!!!', () => {
    console.log("File was written");
});
fs.writeFile('./docs/blog2.txt', 'Hello, World!!!. Good time to spend our days', () => {
    console.log("File was written");
});
*/  

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
           console.log(err);
        }
        console.log("File created");
   });   
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder Deleted");
    });
}

// Delete Files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted!!!");
    });
}
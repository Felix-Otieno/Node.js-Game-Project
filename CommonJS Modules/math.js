// Exporting in CommonJS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export multiple functions
module.exports = { add, subtract };

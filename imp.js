async function loadMath() {
    const math = await import('./math.js');
    console.log(math.add(4, 2));  // 6
}

loadMath();

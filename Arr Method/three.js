const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const weekends = ['Sat', 'Sun'];

for (const weekend of weekends) {
  days.unshift(weekend);
}

console.log(days);
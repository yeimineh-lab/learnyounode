// baby-steps.js
const numbers = process.argv.slice(2);
const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0);
console.log(sum);

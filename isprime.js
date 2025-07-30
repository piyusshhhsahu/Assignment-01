const isPrime = require('./isprime');

const numbers = [2, 10, 17, 21, 29];

numbers.forEach((num) => {
  console.log(`${num} is ${isPrime(num) ? 'Prime' : 'Not Prime'}`);
});
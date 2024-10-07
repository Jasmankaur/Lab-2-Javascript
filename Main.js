// Main.js
import { greetUser, convertMinutesToHours, multiplyNumbers, calculateSimpleInterest } from './utilities.js';

// Call the first function 
greetUser('Navleen', 'Simran', 'Jasman');

// Call the second function - Convert minutes to hours
let minutes = 60;
let hours = convertMinutesToHours(minutes);
console.log(`${minutes} minutes equal to ${hours} hours`);

// Call the third function - Multiply multiple numbers
let productResult = multiplyNumbers(12, 2, 5);
console.log(`The product of 12, 2, and 5 is ${productResult}`);

// Call the fourth function - Calculate simple interest
let principal = 2000;
let rate = 2;
let time = 5;
let simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest on $${principal} at ${rate}% for ${time} years is $${simpleInterest.toFixed(2)}`);
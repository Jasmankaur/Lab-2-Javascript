// utilities.js

// First Function to accept text as input
export function greetUser(firstName, secondName, thirdName) {
    console.log(`Group members are ${firstName} ${secondName} ${thirdName}.`);
}

// Second Function to perform conversion (minutes to hours)
export function convertMinutesToHours(minutes) {
    return minutes / 60;
}

// Third Function to perform multiplication of multiple numbers
export function multiplyNumbers(...numbers) {
    if (numbers.length === 0) {
        throw new Error('No numbers provided');
    }
    return numbers.reduce((product, num) => product * num, 1);
}

// Fourth Function to calculate simple interest
export function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}
// Function to find prime numbers within a range [start, end]
function findPrimeNumbers(start, end) {
    // Array to store prime numbers
    let primeNumbers = [];

    // Loop through numbers from start to end (excluding end)
    for (let i = start; i < end; i++) {
        // If current number is prime, add it to primeNumbers array
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }
    // Return array of prime numbers within the range
    return primeNumbers;
}

// Function to check if a number is prime
function isPrimeNumber(num) {
    // If number is less than or equal to 1, it's not prime
    if (num <= 1) {
        return false;
    }
    // If number is 2 or 3, it's prime
    if (num <= 3) {
        return true;
    }
    // Check divisibility from 5 up to square root of the number
    for (let i = 5; i <= Math.sqrt(num); i++) {
        // If number is divisible by any value from 5 to sqrt(num), it's not prime
        if (num % i === 0) {
            return false;
        }
    }
    // If number is not divisible by any value, it's prime
    return true;
}

// Find prime numbers between 2 and 10 (inclusive)
const output = findPrimeNumbers(2, 10);

// Output the result
console.log(output); // Output: [2, 3, 5, 7]

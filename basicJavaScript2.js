// Task 1:
// Solving a mathematical problem by taking input and multiplying it by 3, 
// adding 10, dividing by 2, and subtracting 5.

function mindGame(value) {
    let result = value;
    if (typeof value == 'number') {
        if (value >= 0) {
            result = result * 3;
            result = result + 10;
            result = result / 2;
            result = result - 5;
            return result;
        } else {
            return "Oops! Input must be a positive number.";
        }
    }
    else {
        return "Oops! Input must be a number.";
    }
}



// Task 2:
// Counting the characters of word(s) in the input to see if they're odd or even.

function evenOdd(word) {
    if (typeof word == 'string') {
        if (word.length % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    } else {
        return "Oops! Input cannot be in number or boolean format.";
    }
}



// Task 3:
// Finding the difference between 7 and the input number. 
// If the difference is less than 7 it will come out as output, 
// if not, then the output will be the double of input value.

function isLGSeven(input) {
    let difference = input - 7;
    if (typeof input == 'number') {
        if (difference < 7) {
            return difference;
        } else {
            return input * 2;
        }
    } else {
        return "Oops! Input must be a number.";
    }
}



// Task 4:
// Finding the number of Bad Data from an array with both possible positive and negative numbers 
// where positive numbers are Good Data and negative numbers are Bad Data.

function findingBadData(numbers) {
    let badData = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (typeof element !== 'number') {
            return "Error: all values in the array must be numbers";
        }
        if (element < 0) {
            badData++;
        }
    }
    return badData;
}



// Task: 5
// Converting gems of 3 friends into diamonds and calculating the total number of diamonds.
// If the total number crosses 2000, then 2000 diamonds will be deducted from the previous amount.

function gemsToDiamond(friend1, friend2, friend3) {
    let totalDiamond = (friend1 * 21) + (friend2 * 32) + (friend3 * 43);
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') {
        return "Error: all values in the info must be numbers";
    }
    if (totalDiamond > 2000) {
        totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
}
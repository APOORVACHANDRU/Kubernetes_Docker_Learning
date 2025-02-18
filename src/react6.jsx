export const sumOfEvens = (arr) => {
    // Write your code here

    if (arr.length <= 0) {
        return 0;
    }
    let result = arr.reduce((acc, cur) => {
        if (cur % 2 == 0) {
            return acc + cur;
        }
        return acc;
    }, 0);
    return result;
}


// Sum even numbers
// Write a function sumOfEvens(arr), which takes an array arr as an argument. This function should return a sum of every even number in the array.

// Directions
// If the input array is empty or there are no even numbers, then return 0.
// The input array will contain only numbers.

export const formatMoney = (amount) => {
    return "$" + amount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
// Format Money
// Write a function called formatMoney(amount), which takes in a floating-point number amount as input and returns a string representation of the number formatted as currency.

// The output string should have the dollar sign "$" and should have two decimal places, even if the input number has fewer decimal places. The output string should also include commas to separate thousands, millions, billions, and so on.

// Directions
// The input amount can be negative.


export const sumOfThirds = (arr) => {
    // Write your code here

    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i += 3) {
        sum = sum + arr[i];
    }

    return sum;


}

// Sum every third number
// Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

// Directions
// If the input array is empty or contains less than 3 numbers then return 0.
// The input array will contain only numbers.


export const getLongerThanFour = (array) => {
    return array.find(item => item.length > 4) || null;
}

// Array.find I - string
// In this coding challenge, you will be implementing a function called getLongerThanFour(array) that takes an array of strings array. This function should return the first element that’s longer than 4 characters.

// Directions
// If no such element is found, return null.
// Assume that all elements in the array are strings.



const reverseString = (str) => {
    return str.split('').reverse().join('');
};

//Reverse a string
// You have been asked to write a function reverseAString(str) that takes in a string str as an argument. The function should return a new string that is the reverse of the input string.

// Directions
// Strings are immutable, so return a new string.
// If the input string is empty, then return an empty string.


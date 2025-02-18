export const countVowels = (str) => {

    let vowels = ["a", "e", "i", "o", "u"];

    let strArray = str.split('');

    let sumOfStr = strArray.reduce((sum, cur) => {
        if (vowels.includes(cur.toLowerCase())) {
            return sum = sum + 1;
        }
        return sum;
    }, 0);

    return sumOfStr;
}


// Count vowels
// Write a function countVowels(str), which takes a string str as an input. This function should return the total number of vowels in str.

// Directions
// Return 0 if str has no vowels.
// Assume that str may contain any alphanumeric characters.


export const getAnAdult = (users) => {
    // Write your code here

    return users.find((user) => user.age >= 18) || null;
}

// Array.find II - object
// In this coding challenge, you will be implementing a function called getAnAdult(users) that takes an array of objects users. This function should return the first object which property age corresponds to a value greater or equal to 18.

// Directions
// If no such element is found, return null.
// You can assume that all objects in users have the property age.

export const validateObject = (users) => {
    // Write your code here

    return users.every(user => { return user?.firstName });
}
// users.every(user => {
//     user?.firstName;
//   });
//   Explanation:
//   Here, the arrow function has curly braces {} around its body, making it a block body.
//   For arrow functions with block bodies, you must explicitly use the return keyword to return a value.
//   Since there is no return in this snippet, the callback will always return undefined, and .every() will evaluate as false for any non-empty array.

// Array.every II - objects
// In this coding challenge, you will be implementing a function called validateObject(users) that takes an array of users as the input. Assume that every user is an object. The function should check if every user object in the array users has the property firstName.

// Directions
// If the input array is empty, return false.
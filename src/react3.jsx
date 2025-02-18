export const removeFalsy = (arr) => {

    return arr.filter(Boolean)

}



// Remove falsy values
// In this coding challenge, you will be implementing a function removeFalsey(arr) that accepts an array arr and returns a new array containing only the truthy values.

// A value is considered truthy if it is NOT one of the following: false, null, undefined, 0, NaN, or an empty string.

// Directions
// The input array may contain any number of values, including zero.
// The returned array should only contain truthy values.
// The original input array should not be modified.
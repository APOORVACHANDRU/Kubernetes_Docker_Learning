export const removeVowels = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];

    let chars = str.split("");

    let filteredChars = chars.filter(char => !vowels.includes(char.toLowerCase()));

    let result = filteredChars.join('');
    return result;
}


// Remove vowels
// Write a function removeVowels(n), which takes a string str as an input. This function should return a new string with all of the vowels removed.

// Directions
// The function should remove vowels in both lowercase and UPPERCASE.
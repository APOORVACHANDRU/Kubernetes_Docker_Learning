import { useState } from 'react';
const App = () => {
    const [value, setValue] = useState("");
    const [isValueLessThanThree, setIsValueLessThanThree] = useState(true);
    const handleOnChange = (e) => {

        let newValue = e.target.value;
        setValue(newValue);

        setIsValueLessThanThree(newValue.length < 3)

    }
    return (
        <>
            <input data-testid="input-id" value={value} onChange={handleOnChange} />
            <button data-testid="button-id" disabled={isValueLessThanThree}>Click</button>
        </>
    )
}

export default App

import { useState } from 'react'

export const Hello = () => {
    const [text, setText] = useState('')
    return (
        <>
            <input data-testid="input-id" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button data-testid="button-id" disabled={text.length < 3}>Click</button>
        </>
    )
}



export const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const capitaliseWord = (word) => {
    // Write your code here
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};


// Capitalise a word
// Implement a function called capitalizeWord(word) that capitalizes the first letter of the input string word and returns the capitalized string.

// Directions
// The function should return a new string with the first letter capitalized.
// If the input is an empty string, return an empty string.
// The input will always be a string consisting of one word, and will not contain numbers or special characters.
// Transform only the first character to UpperCase, remaining characters should be in LowerCase.


export const shuffleArray = (arr) => {
    // Write your code here

    if (arr.length === 0) {
        return arr;
    }

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.round(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Shuffle an array
// Write a function suffleArray(arr), which takes an array arr as an argument.This function should shuffle the elements of the array like a deck of cards or in other words, randomly change their positions.

//     Directions
// If the input array is empty then return an empty array
// You should shuffle the array in place, do not create a new array
// shuffleArray([1, 2, 3, 4, 5]); // Output: [2, 5, 1, 4, 3]
// shuffleArray(['apple', 'banana', 'orange', 'mango', 'kiwi']); // Output: ['mango', 'kiwi', 'orange', 'banana', 'apple']
// shuffleArray([5, 10, 15, 20, 25, 30, 35]); // Output: [20, 5, 25, 15, 10, 30, 35]

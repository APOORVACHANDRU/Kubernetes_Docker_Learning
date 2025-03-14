import React, { useState, useEffect } from 'react';

const App = () => {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const storedValue = localStorage.getItem("inputValue");
        if (storedValue) {
            setInputValue(storedValue)
        }
    }, [])

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputValue(value);
        localStorage.setItem("inputValue", value);
    }


    return (
        <div>
            <input data-testid='input-id' type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    );
};

export default App;


// Write a simple App component that returns an input field of type text.Users can interact with the input field to type in any string they want.You’re meant to store this string in local storage so that every time when the page reloads it pre - fills the input field with the latest known value for the users.

// We have already written some starting code for you.
// Directions
// Do not edit the data-testid attributes.
// Use the reload button in the demo browser to test if your component works as expected.
// Use key inputValue to store the data in local storage.

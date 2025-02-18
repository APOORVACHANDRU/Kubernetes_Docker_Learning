import { useState } from 'react';
const App = () => {
    // Edit this component
    const [value, setValue] = useState("");


    const handleChange = (e) => {
        e.preventDefault();
        // let inputValue = e.target.value
        setValue(e.target.value);
    }

    let celsius = parseFloat(value);
    let kelvin = (celsius + 273.15).toFixed(2);
    let fahrenheit = ((celsius * 9 / 5) + 32).toString();
    return (
        <div>
            <form>
                <input
                    data-testid='input-id'
                    name="input"
                    // type="text"
                    value={value}
                    onChange={handleChange}
                />
                <label for="input">°C</label>
            </form>
            <p data-testid='output'>

                {value}°C is {fahrenheit}°F and {kelvin}K.
            </p>
        </div>
    );
};

export default App;
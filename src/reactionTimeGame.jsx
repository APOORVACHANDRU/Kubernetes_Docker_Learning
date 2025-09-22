import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color:${(props) => (props.isChangeColor ? "green" : "red")};
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;
function ReactionTest() {
    const [isGameStart, setIsGameStart] = useState(false);
    const [isChangeColor, setIsChangeColor] = useState(false);
    const [greenTime, setGreenTime] = useState(null);
    const [timeYouTook, setTimeYouTook] = useState(null);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const changeRedToGreen = () => {
        setIsChangeColor(true);
        if (!greenTime) {
            const timestamp = Date.now();
            setGreenTime(timestamp); // Set the time only once
            console.log("Green time set to:", timestamp);
        }

    }

    const setRandomTime = () => {
        let time = (Math.floor(Math.random() * 6) + 1) * 1000;
        return time;
    }
    const handleClick = () => {
        setIsGameStart(true);

    }
    useEffect(() => {
        if (isGameStart) {
            let randomTime = setRandomTime();
            const timer = setTimeout(changeRedToGreen, randomTime);

            return () => clearTimeout(timer);
        }
    }, [isGameStart]);





    const handleChangeColor = () => {
        console.log("I am green color just like that", greenTime);
        const clickTime = Date.now();

        if (!greenTime) {
            setTimeYouTook(clickTime - greenTime);
        }
        setIsGameStart(false);
        setIsChangeColor(false);
    }
    return (
        <>
            {!isGameStart && !timeYouTook && (<button onClick={handleClick}>Start Game</button>)}

            {isGameStart && (<Button onClick={handleChangeColor} isChangeColor={isChangeColor}></Button>)}
            {timeYouTook && (<p>You took {timeYouTook}ms!</p>)}
            {!isGameStart && !isChangeColor && !timeYouTook && (<p>You clicked too early!</p>)}
        </>
    );
}

export default ReactionTest;
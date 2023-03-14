
import React from 'react';

const Game = () => {

    const [gameInProgress, setGameInProgress] = React.useState(false);
    const [gameFinished, setGameFinished] = React.useState(false);
    const [resetGrid, setResetGrid] = React.useState(true);

    const numbersAndLettersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [numbersAndLetters, setNumbersAndLetters] = React.useState(numbersAndLettersArray);

    const words = ["APPLE", "APRICOT", "AVOCADO", "BANANA", "BEET", "BLACKBERRY", "BLUEBERRY", "BROCCOLI", "BRUSSELS", "SPROUT", "CABBAGE", "CANTALOUPE", "CARROT", "CAULIFLOWER", "CELERY", "CHERRY", "CLEMENTINE", "CORN", "CUCUMBER", "DRAGONFRUIT", "EGGPLANT", "ELDERBERRY", "FIG", "GARLIC", "GRAPE", "GRAPEFRUIT", "GUAVA", "HONEYDEW", "JALAPENO", "KALE", "KIWI", "LEEK", "LEMON", "LETTUCE", "LIME", "MANDARIN", "MANGO", "NECTARINE", "OKRA", "OLIVE", "ONION", "ORANGE", "PAPAYA", "PARSNIP", "PEACH", "PEAR", "PEPPER", "PINEAPPLE", "PLANTAIN", "PLUM", "POMEGRANATE", "POTATO", "PUMPKIN", "RADICCHIO", "RADISH", "RAISIN", "RASPBERRY", "RHUBARB", "ROMAINE", "SCALLION", "SHALLOT", "SPINACH", "SQUASH", "STRAWBERRY", "POTATO", "TANGERINE", "TOMATO", "TURNIP", "WATERCRESS", "WATERMELON", "YAM", "SQUASH", "ZUCCHINI", "ARTICHOKE", "ASPARAGUS", "BUTTERNUT", "CACTUS", "GOOSEBERRY", "CARDAMOM", "CASHEW", "CHAYOTE", "CHICKPEA", "CHICORY", "CRANBERRY", "DANDELION", "DURIAN", "ENDIVE", "FEIJOA", "FIDDLEHEAD", "GINGER", "JACKFRUIT", "JICAMA", "KOHLRABI", "LOTUS", "LYCHEE", "MALANGA", "BEAN", "CABBAGE", "OKRAH", "PAPRIKA", "PEANUT", "RADICCHIO", "SALSIFY", "SAPOTE", "PEPPER", "TARO", "TOMATILLO", "TURMERIC", "WASABI", "YUZU"]

    const [currentWord, setCurrentWord] = React.useState('');
    const [currentAnswer, setCurrentAnswer] = React.useState('');
    const [correctAnswers, setCorrectAnswers] = React.useState(0);

    const [timer, setTimer] = React.useState(0);

    const getTime = (timer) => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const timerString = `${minutesString}:${secondsString}`;
        return timerString;
    };

    React.useEffect(() => {
        let interval = null;
        if (gameInProgress) {
            interval = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        } else if (!gameInProgress) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [gameInProgress]);

    const randomiseArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const splitArray = (array) => {
        const gridArray = [];
        for (let i = 0; i < array.length; i += 6) {
            gridArray.push(array.slice(i, i + 6));
        }
        return gridArray;
    };

    const generateGrid = () => {
        if (resetGrid) {
            const newNumbersAndLettersArray = randomiseArray(numbersAndLetters);
            setNumbersAndLetters(newNumbersAndLettersArray);

            const newWord = words[Math.floor(Math.random() * words.length)];
            setCurrentWord(newWord);

            setResetGrid(false);
        }
        return generateRows(splitArray(numbersAndLetters));
    };

    const generateRows = (array) => {
        return array.map((row, index) => {
            return (
                <div key={index} className='row'>
                    {generateColumns(row)}
                </div>
            );
        });
    };

    const generateColumns = (array) => {
        return array.map((column, index) => {
            return (
                <button key={index} className='game-button' value={column} onClick={handleClick}>
                    {column}
                </button>
            );
        });
    };

    const handleStart = () => {
        setGameFinished(false);
        setGameInProgress(true);
        setResetGrid(true);
        setCorrectAnswers(0);
        setCurrentAnswer('');
        setTimer(0);
    };

    const handleClick = (event) => {
        const value = event.currentTarget.value;
        setCurrentAnswer(currentAnswer + value);
    };

    const handleAnswer = () => {
        if (currentAnswer === currentWord) {
            setCurrentAnswer('')
            setResetGrid(true);
            setCorrectAnswers(correctAnswers + 1);
            if (correctAnswers + 1 >= 5) {
                setGameInProgress(false);
                setGameFinished(true);
                setTimer(0);
            }
        } else {
            alert('Incorrect!');
            setCurrentAnswer('');
        }
    };

    const handleDelete = () => {
        setCurrentAnswer(currentAnswer.slice(0, -1));
    };

    return (
        <div className="containers">
            {
                gameFinished ? (
                    <div className='game-div'>
                        <h1>Game Over!</h1>
                        <h2>Time Elapsed: {getTime(timer)}</h2>
                        <h2>Score: {correctAnswers}</h2>
                    </div>
                ) : null
            }
            {!gameInProgress ? (
                <div className='game-div'>
                    <button
                        id='game-start-button'
                        className='game-utility-button'
                        onClick={handleStart}
                    >
                        Start Game
                    </button>
                </div>
            ) : null}
            {gameInProgress ?
                <>
                    <div>
                        <h1>{currentWord}</h1>
                        <div className='game-header'>
                            <h2>Time Elapsed: {getTime(timer)}</h2>
                            <h2>Score: {correctAnswers}</h2>
                        </div>

                    </div>
                    {generateGrid()}
                    <div id='answer-div'>
                        <h1>{currentAnswer}</h1>
                    </div>
                    <button className='game-utility-button' onClick={handleDelete}>Delete</button>
                    <button className='game-utility-button' onClick={handleAnswer}>Enter</button>
                </>
                : null}

        </div>
    );
};

export default Game;
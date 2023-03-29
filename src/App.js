import logo from './logo.svg';
import './App.css';
import generateLetterStatuses from './components/generateLetterStatues';
import React, { useState } from 'react';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

function App() {
  const letterStatus = generateLetterStatuses()
  const [letters, setLetters] = useState(letterStatus)
  const [solution, setSolution] = useState({word: "WORD", hint: "Is A Word"})
  const [score, setScore] = useState(100);
  const [trueGuessedLetters, setTrueGuessedLetters] = useState([]);
  const selectLetter = function (letter) {
    isLetterInWord(letter)
    setLetters(prevState => {
      const newLetters = {...letters}
      newLetters[letter] = true;
      return newLetters
    })
  }

  const increaseScore = function () {
    return setScore(score + 5)
  }

  const decreaseScore = function () {
    return setScore(score - 20)
  }

  const isLetterInWord = function (letter) {
    const word = solution.word.split("")
    for(let l of word) {
      if(l == letter) {
        setTrueGuessedLetters([...trueGuessedLetters, letter])
        return (increaseScore())
      }
    }
    decreaseScore()
  }

  return (
  
    <div>
    <Score score={score} theWord={solution} letterStatus={letters} />
    <Solution letterStatus={letters} solution={solution} addScore={increaseScore} decreaseScore={decreaseScore}/>
    <Letters letterStatus={letters} letterEvent={selectLetter} score={isLetterInWord}/>
    <EndGame score={score} solution={solution} trueGussetLetters={trueGuessedLetters}/>
    </div>
  )
}

export default App;

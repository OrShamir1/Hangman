function EndGame (props) {
    const score =props.score
    const lettersGuessed = props.trueGussetLetters
    const word = props.solution.word.split("")
    const endGameFunction = function () {
        if(score <= 0) {
            return ("You Lost The Word Was " + props.solution.word)
        }
        else if(word.length == lettersGuessed.length) {
            return ("You Won !")
        }
    }

    
    return (
        <span>{endGameFunction()}</span>
    )
}
export default EndGame
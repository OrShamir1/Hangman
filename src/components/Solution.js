import Letter from "./Letter";
function Solution (props) {
    
    const isLetterGuessed = function(letter) {
        if(!props.letterStatus[letter]) {
            return ("-")
        }
        else return (letter)
    }
    const word = props.solution.word.split("");
    const hint = props.solution.hint;

    return (
        <div>
        {word.map((l)=> <span>{isLetterGuessed(l)}</span>)}
        <div>{hint}</div>
        </div>
        
    )
}
export default Solution
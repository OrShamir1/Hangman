import Letter from "./Letter"
function Letters(props) {
    const scoreFunction = props.score
    const clickOnLetterEvent = props.letterEvent
    const isLetterUsed = function (letter) {
        if (props.letterStatus[letter]) {
            return (
                { letter: letter, theClass: "Tapped" })
        }
        else return (
                    { letter: letter, theClass: "NotTapped" })
    }
    const availableLetters = Object.keys(props.letterStatus);
    return (
        <div>
            {availableLetters.map(l => <Letter letterInfo={isLetterUsed(l)} letterOnClickEvent={clickOnLetterEvent} />)}
        </div>
    )
}
export default Letters
function Letter (props) {
    const letterInfo =props.letterInfo
    const letter = letterInfo.letter
    const theClass = letterInfo.theClass
    const theWord = letterInfo.word
    const clickEvent = props.letterOnClickEvent
    
    return (
        <span className={theClass} onClick={() => clickEvent(letter)}>{letter}</span>
    )
}
export default Letter
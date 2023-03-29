function Score (props) {
    const score = props.score
    const createClassScore = function (score) {
        if(score > 80) {
            return "green"
        }
        else if(score > 40) {
            return "blue"
        }
        else return "red"
    }
    const className= createClassScore(score)
    return (
        <div className={className}>{score}</div>
        
    )
}
export default Score
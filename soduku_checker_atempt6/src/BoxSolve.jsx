const BoxSolve = ({
    classOfBox,
    largeBoxNumber, 
    smallBoxNumber, 
    onInputChange, 
    boxClass,
    arrayOfBoxes,
}) => {
    const input = <input type="number" autoComplete="off" id="guessImput" className={classOfBox[largeBoxNumber][smallBoxNumber]} onChange={onInputChange} value={arrayOfBoxes[largeBoxNumber][smallBoxNumber]}/>
    return <div className={boxClass}>{input}</div>
}

export default BoxSolve
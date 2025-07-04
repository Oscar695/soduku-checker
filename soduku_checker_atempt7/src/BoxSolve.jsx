const BoxSolve = ({
    boxClass,
    classOfBox,
    arrayOfBoxes,
    onInputChange,
    largeBoxNumber, 
    smallBoxNumber,  
}) => {
    const input = <input type="number" autoComplete="off" id="guessImput" className={classOfBox[largeBoxNumber][smallBoxNumber]} onChange={onInputChange} value={arrayOfBoxes[largeBoxNumber][smallBoxNumber]}/>
    return <div className={boxClass}>{input}</div>
}

export default BoxSolve
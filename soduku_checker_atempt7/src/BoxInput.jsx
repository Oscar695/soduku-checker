const BoxInput = ({
    boxClass,
    onInputChange, 
    largeBoxNumber, 
    smallBoxNumber,
    classOfBoxInput,  
    arrayOfBoxesInput,
}) => {
    const input = <input type="number" autoComplete="off" id="guessImput" value={arrayOfBoxesInput[largeBoxNumber][smallBoxNumber]} className={classOfBoxInput[largeBoxNumber][smallBoxNumber]} onChange={onInputChange}/>
    return <div className={boxClass}>{input}</div>
}

export default BoxInput
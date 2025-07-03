const BoxInput = ({
    classOfBox, 
    largeBoxNumber, 
    smallBoxNumber, 
    onInputChange, 
    boxClass
}) => {
    const input = <input type="number" autoComplete="off" id="guessImput" className={classOfBox[largeBoxNumber][smallBoxNumber]} onChange={onInputChange}/>
    return <div className={boxClass}>{input}</div>
}

export default BoxInput
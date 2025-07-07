import "./BoxSolve.css"
import EdgeNumbersGridSolve from "./EdgeNumbersGridSolve"

const BoxSolve = ({
    boxClass,
    classOfBox,
    arrayOfBoxes,
    largeNumbers,
    smallNumbers,
    onInputChange,
    largeBoxNumber, 
    smallBoxNumber,  
    smallCenterNumbers,
    arrayOfBoxesSmallEdge,
    arrayOfBoxesSmallCenter,
}) => { 
    // console.log(<EdgeNumbersGridSolve 
    //     arrayOfBoxesSmallEdge={arrayOfBoxesSmallEdge} 
    //     string={"smallEdgeSolveNumbers"}
    //     largeBoxNumber={largeBoxNumber}
    //     smallBoxNumber={smallBoxNumber}
    // />)
    const which = (array) => {
        return ((typeof array[largeBoxNumber][smallBoxNumber] === typeof "") && (array[largeBoxNumber][smallBoxNumber] !== ""))
    }
    let arrayOfSolveBox = ""
    let edgeNumbers = ""
    if (which(arrayOfBoxes)) arrayOfSolveBox = arrayOfBoxes[largeBoxNumber][smallBoxNumber]
    else if (which(arrayOfBoxesSmallEdge)) edgeNumbers = <EdgeNumbersGridSolve 
        arrayOfBoxesSmallEdge={arrayOfBoxesSmallEdge} 
        string={"smallEdgeSolveNumbers"}
        largeBoxNumber={largeBoxNumber}
        smallBoxNumber={smallBoxNumber}
    />
    else if (which(arrayOfBoxesSmallCenter)) arrayOfSolveBox = arrayOfBoxesSmallCenter[largeBoxNumber][smallBoxNumber]
    let classOfSolveBox = "inputBox"
    if (which(arrayOfBoxes)) classOfSolveBox = classOfBox[largeBoxNumber][smallBoxNumber]
    else if (which(arrayOfBoxesSmallEdge)) classOfSolveBox = "smallEdgeSolveNumbers"
    else if (which(arrayOfBoxesSmallCenter)) classOfSolveBox = "smallCenterSolveNumbers"
    const input = <input type="number" autoComplete="off" id="guessImput" className={classOfSolveBox} onChange={onInputChange} value={arrayOfSolveBox}/>
    return <div><div className={boxClass}>{input}</div>{edgeNumbers}</div>
}

export default BoxSolve
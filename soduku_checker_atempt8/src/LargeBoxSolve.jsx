import ThreeLongRowSolve from "./ThreeLongRowSolve"
import "./LargeBox.css"

const LargeBoxSolve = ({
    a,
    b,
    setWin,
    classOfBox,
    valueOfBox,
    setResponce,
    arrayOfBoxes,
    largeNumbers,
    smallNumbers,
    numberOfBoxes,
    setClassOfBox,
    setTotalValue,
    setArrayOfBoxes,
    defaultClassOfBox,
    smallCenterNumbers,
    arrayOfBoxesSmallEdge,
    arrayOfBoxesSmallCenter,
    setArrayOfBoxesSmallEdge,
    setArrayOfBoxesSmallCenter,
    numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
    numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
}) => {
    const createLargeBox = () => {
        const largeBox = []
        for (let c = 0; c < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; c++) {
            // large box
            const rowLineThinShortLength = {width: `${(42 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + 3.2 + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 1.6)}px`}
            const rowLineThin = <div className="rowLineThin" style={rowLineThinShortLength}></div>
            if (c !== 0) largeBox.push(rowLineThin)
            const row = <ThreeLongRowSolve
                a={a}
                b={b}
                c={c}
                setWin={setWin}
                classOfBox={classOfBox}
                valueOfBox={valueOfBox}
                setResponce={setResponce}
                arrayOfBoxes={arrayOfBoxes}
                largeNumbers={largeNumbers}
                smallNumbers={smallNumbers}
                numberOfBoxes={numberOfBoxes}
                setClassOfBox={setClassOfBox}
                setTotalValue={setTotalValue}
                setArrayOfBoxes={setArrayOfBoxes}
                defaultClassOfBox={defaultClassOfBox}
                smallCenterNumbers={smallCenterNumbers}
                arrayOfBoxesSmallEdge={arrayOfBoxesSmallEdge}
                arrayOfBoxesSmallCenter={arrayOfBoxesSmallCenter}
                setArrayOfBoxesSmallEdge={setArrayOfBoxesSmallEdge}
                setArrayOfBoxesSmallCenter={setArrayOfBoxesSmallCenter}
                numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
                numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
            />
            const rowLineThickShortLength = {width: `${(42 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 1.6)}px`}
            const rowLineThickShort = <div className="rowLineThickShort" style={rowLineThickShortLength}></div>
            largeBox.push(row)
            if (c === (numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1)) largeBox.push(rowLineThickShort)
        }
        return largeBox
    }
    return <div>{createLargeBox()}</div>
}

export default LargeBoxSolve
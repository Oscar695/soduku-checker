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
    numberOfBoxes,
    setClassOfBox,
    setTotalValue,
    setArrayOfBoxes,
    defaultClassOfBox,
    numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
    numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
}) => {
    const createLargeBox = () => {
        const largeBox = []
        for (let c = 0; c < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; c++) {
            // large box
            const rowLineThinShortLength = {width: `${(2 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + 0.2 + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 0.1)}em`}
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
                numberOfBoxes={numberOfBoxes}
                setClassOfBox={setClassOfBox}
                setTotalValue={setTotalValue}
                setArrayOfBoxes={setArrayOfBoxes}
                defaultClassOfBox={defaultClassOfBox}
                numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
                numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
            />
            const rowLineThickShortLength = {width: `${(2 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 0.1)}em`}
            const rowLineThickShort = <div className="rowLineThickShort" style={rowLineThickShortLength}></div>
            largeBox.push(row)
            if (c === (numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1)) largeBox.push(rowLineThickShort)
        }
        return largeBox
    }
    return <div>{createLargeBox()}</div>
}

export default LargeBoxSolve
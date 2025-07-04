import ThreeLongRowInput from "./ThreeLongRowInput"
import "./LargeBox.css"

const LargeBoxInput = ({
    a,
    b,
    setWin,
    valueOfBox,
    setResponce,
    numberOfBoxes,
    classOfBoxInput,
    setArrayOfBoxes,
    arrayOfBoxesInput,
    setClassOfBoxInput,
    setArrayOfBoxesInput,
    defaultClassOfBoxInput,
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
            const row = <ThreeLongRowInput
                a={a}
                b={b}
                c={c}
                setWin={setWin}
                valueOfBox={valueOfBox}
                setResponce={setResponce}
                numberOfBoxes={numberOfBoxes}
                setArrayOfBoxes={setArrayOfBoxes}
                classOfBoxInput={classOfBoxInput}
                arrayOfBoxesInput={arrayOfBoxesInput}
                setClassOfBoxInput={setClassOfBoxInput}
                setArrayOfBoxesInput={setArrayOfBoxesInput}
                defaultClassOfBoxInput={defaultClassOfBoxInput}
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

export default LargeBoxInput
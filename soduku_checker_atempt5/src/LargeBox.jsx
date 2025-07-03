import ThreeLongRow from "./ThreeLongRow"

const LargeBox = ({
    a,
    b,
    numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
    numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
    setResponce,
    defaultClassOfBox,
    arrayOfBoxes,
    numberOfBoxes,
    setTotalValue,
    setClassOfBox,
    setWin,
    valueOfBox,
    setArrayOfBoxes,
    classOfBox,
}) => {
    const createLargeBox = () => {
        const largeBox = []
        for (let c = 0; c < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; c++) {
            // large box
            const rowLineThinShortLength = {width: `${(2 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + 0.2 + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 0.1)}em`}
            const rowLineThin = <div className="rowLineThin" style={rowLineThinShortLength}></div>
            if (c !== 0) largeBox.push(rowLineThin)
            const row = <ThreeLongRow
                numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
                numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
                a={a}
                b={b}
                c={c}
                setResponce={setResponce}
                defaultClassOfBox={defaultClassOfBox}
                arrayOfBoxes={arrayOfBoxes}
                numberOfBoxes={numberOfBoxes}
                setTotalValue={setTotalValue}
                setClassOfBox={setClassOfBox}
                setWin={setWin}
                valueOfBox={valueOfBox}
                setArrayOfBoxes={setArrayOfBoxes}
                classOfBox={classOfBox}
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

export default LargeBox
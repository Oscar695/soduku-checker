 import ThreeLongRow from "./ThreeLongRow"

 const LargeBox = ({
    a,
    b,
    NoOfSmallBoxesLong,
    NoOfLargeBoxesLong,
    setResponce,
    defaultClassOfBox,
    arrayOfBoxes,
    NoOfSmallBoxes,
    NoOfLargeBoxes,
    setTotalValue,
    setClassOfBox,
    setWin,
    valueOfBox,
    setArrayOfBoxes,
    classOfBox,
    NoOfSmallBoxesTall,

 }) => {

 
    const createLargeBox = () => {
        const largeBox = []
        for (let c = 0; c < NoOfSmallBoxesTall; c++) {
        // large box
        const rowLineThinLength = {width: `${(2 * NoOfSmallBoxesLong) + 0.25 + ((NoOfSmallBoxesLong - 1) * 0.1)}em`}
        const rowLineThin = <div className="rowLineThin" style={rowLineThinLength}></div>
        if (c !== 0) largeBox.push(rowLineThin)
        const row = <ThreeLongRow
            NoOfSmallBoxesLong={NoOfSmallBoxesLong}
            NoOfLargeBoxesLong={NoOfLargeBoxesLong}
            a={a}
            b={b}
            c={c}
            setResponce={setResponce}
            defaultClassOfBox={defaultClassOfBox}
            arrayOfBoxes={arrayOfBoxes}
            NoOfSmallBoxes={NoOfSmallBoxes}
            NoOfLargeBoxes={NoOfLargeBoxes}
            setTotalValue={setTotalValue}
            setClassOfBox={setClassOfBox}
            setWin={setWin}
            valueOfBox={valueOfBox}
            setArrayOfBoxes={setArrayOfBoxes}
            classOfBox={classOfBox}
        />
        const rowLineThickLength = {width: `${(2 * NoOfSmallBoxesLong) + 0.05 + ((NoOfSmallBoxesLong - 1) * 0.1)}em`}
        const rowLineThickShort = <div className="rowLineThickShort" style={rowLineThickLength}></div>
        largeBox.push(row)
        if (c === (NoOfSmallBoxesTall - 1)) largeBox.push(rowLineThickShort)
        }
        return largeBox
    }
    return <div>{createLargeBox()}</div>
 }

 export default LargeBox
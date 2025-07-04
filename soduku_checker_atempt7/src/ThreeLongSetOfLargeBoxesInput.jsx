import LargeBoxInput from "./LargeBoxInput"
import "./ThreeLongSetOfLargeBoxes.css"

const ThreeLongSetOfLargeBoxesInput = ({
  a,
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
  const createThreeLongSetOfLargeBoxes = () => {
    const threeLongSetOfLargeBoxes = []
    for (let b = 0; b < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; b++) {
      // 3 large boxs
      const thickCollemHight = {height: `${(42 * numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + ((numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1) * 1.6)}px`}
      const collemLineThickLong = <div className="collemLineThickLong" style={thickCollemHight}></div>
      const rowOfLargeBoxes = <LargeBoxInput
        a={a}
        b={b}
        setWin={setWin}
        valueOfBox={valueOfBox}
        setResponce={setResponce}
        numberOfBoxes={numberOfBoxes}
        classOfBoxInput={classOfBoxInput}
        setArrayOfBoxes={setArrayOfBoxes}
        arrayOfBoxesInput={arrayOfBoxesInput}
        setClassOfBoxInput={setClassOfBoxInput}
        setArrayOfBoxesInput={setArrayOfBoxesInput}
        defaultClassOfBoxInput={defaultClassOfBoxInput}
        numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
        numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
      />
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
      if (b === (numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1)) threeLongSetOfLargeBoxes.push(collemLineThickLong)
    }
    return threeLongSetOfLargeBoxes
  }
  return <div className="lineUp">{createThreeLongSetOfLargeBoxes()}</div>
}  

export default ThreeLongSetOfLargeBoxesInput
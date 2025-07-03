import LargeBoxInput from "./LargeBoxInput"
import "./ThreeLongSetOfLargeBoxes.css"

const ThreeLongSetOfLargeBoxesInput = ({
  numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
  numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
  a,
  setResponce,
  defaultClassOfBox,
  arrayOfBoxes,
  numberOfBoxes,
  setClassOfBox,
  setWin,
  valueOfBox,
  setArrayOfBoxes,
  classOfBoxInput,
  setDeafultClassOfBox,
  setClassOfBoxInput,
  defaultClassOfBoxInput,
}) => {
  const createThreeLongSetOfLargeBoxes = () => {
    const threeLongSetOfLargeBoxes = []
    for (let b = 0; b < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; b++) {
      // 3 large boxs
      const thickCollemHight = {height: `${(2 * numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + ((numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1) * 0.1)}em`}
      const collemLineThickLong = <div className="collemLineThickLong" style={thickCollemHight}></div>
      const rowOfLargeBoxes = <LargeBoxInput
        numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
        numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
        a={a}
        b={b}
        setResponce={setResponce}
        defaultClassOfBox={defaultClassOfBox}
        arrayOfBoxes={arrayOfBoxes}
        numberOfBoxes={numberOfBoxes}
        setClassOfBox={setClassOfBox}
        setWin={setWin}
        valueOfBox={valueOfBox}
        setArrayOfBoxes={setArrayOfBoxes}
        classOfBoxInput={classOfBoxInput}
        setDeafultClassOfBox={setDeafultClassOfBox}
        setClassOfBoxInput={setClassOfBoxInput}
        defaultClassOfBoxInput={defaultClassOfBoxInput}
      />
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
      if (b === (numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1)) threeLongSetOfLargeBoxes.push(collemLineThickLong)
    }
    return threeLongSetOfLargeBoxes
  }
  return <div className="lineUp">{createThreeLongSetOfLargeBoxes()}</div>
}  

export default ThreeLongSetOfLargeBoxesInput
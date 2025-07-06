import LargeBoxSolve from "./LargeBoxSolve"
import "./ThreeLongSetOfLargeBoxes.css"

const ThreeLongSetOfLargeBoxesSolve = ({
  setArrayOfBoxesSmallEdge,
  setArrayOfBoxesSmallCenter,
  arrayOfBoxesSmallEdge,
  arrayOfBoxesSmallCenter,
  smallNumbers,
  largeNumbers,
  smallCenterNumbers,
  a,
  setWin,
  classOfBox,
  valueOfBox,
  setResponce,
  arrayOfBoxes,
  numberOfBoxes,
  setClassOfBox,
  setArrayOfBoxes,
  defaultClassOfBox,
  numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
  numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
}) => {
  const createThreeLongSetOfLargeBoxes = () => {
    const threeLongSetOfLargeBoxes = []
    for (let b = 0; b < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; b++) {
      // 3 large boxs
      const thickCollemHight = {height: `${(42 * numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + ((numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1) * 1.6)}px`}
      const collemLineThickLong = <div className="collemLineThickLong" style={thickCollemHight}></div>
      const rowOfLargeBoxes = <LargeBoxSolve
        setArrayOfBoxesSmallEdge={setArrayOfBoxesSmallEdge}
        setArrayOfBoxesSmallCenter={setArrayOfBoxesSmallCenter}
        arrayOfBoxesSmallEdge={arrayOfBoxesSmallEdge}
        arrayOfBoxesSmallCenter={arrayOfBoxesSmallCenter}
        smallNumbers={smallNumbers}
        largeNumbers={largeNumbers}
        smallCenterNumbers={smallCenterNumbers}
        a={a}
        b={b}
        setWin={setWin}
        classOfBox={classOfBox}
        valueOfBox={valueOfBox}
        setResponce={setResponce}
        arrayOfBoxes={arrayOfBoxes}
        numberOfBoxes={numberOfBoxes}
        setClassOfBox={setClassOfBox}
        setArrayOfBoxes={setArrayOfBoxes}
        defaultClassOfBox={defaultClassOfBox}
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

export default ThreeLongSetOfLargeBoxesSolve
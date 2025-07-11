import ThreeLongSetOfLargeBoxesSolve from "./ThreeLongSetOfLargeBoxesSolve"
import "./Grid.css"

const GridSolve = ({ 
  setWin,
  classOfBox,
  valueOfBox,
  setResponce,
  arrayOfBoxes,
  largeNumbers,
  smallNumbers,
  numberOfBoxes,
  setClassOfBox,
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
  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < numberOfLargeBoxesTallAndNoOfSmallBoxesLong; a++) {
      // full soduku
      const thickRowLineLength = {width: `${(numberOfLargeBoxesLongAndNoOfSmallBoxesTall * ((42 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 1.6) + 4.8))}px`}
      const rowLineThickLong = <div className="rowLineThickLong" style={thickRowLineLength}></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <ThreeLongSetOfLargeBoxesSolve
        a={a}
        setWin={setWin}
        classOfBox={classOfBox}
        valueOfBox={valueOfBox}
        setResponce={setResponce}
        arrayOfBoxes={arrayOfBoxes}
        largeNumbers={largeNumbers}
        smallNumbers={smallNumbers}
        numberOfBoxes={numberOfBoxes}
        setClassOfBox={setClassOfBox}
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
      fullGrid.push(grid)
    }
    return fullGrid
  }
  return <div>{createGrid()}</div>
}

export default GridSolve
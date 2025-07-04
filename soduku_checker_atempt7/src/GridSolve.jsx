import ThreeLongSetOfLargeBoxesSolve from "./ThreeLongSetOfLargeBoxesSolve"
import "./Grid.css"

const GridSolve = ({
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
  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < numberOfLargeBoxesTallAndNoOfSmallBoxesLong; a++) {
      // full soduku
      const thickRowLineLength = {width: `${(numberOfLargeBoxesLongAndNoOfSmallBoxesTall * ((2 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + 0.3 + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 0.1)))}em`}
      const rowLineThickLong = <div className="rowLineThickLong" style={thickRowLineLength}></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <ThreeLongSetOfLargeBoxesSolve
        a={a}
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
      fullGrid.push(grid)
    }
    return fullGrid
  }
  return <div>{createGrid()}</div>
}

export default GridSolve
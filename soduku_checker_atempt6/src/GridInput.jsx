import ThreeLongSetOfLargeBoxesInput from "./ThreeLongSetOfLargeBoxesInput"
import "./Grid.css"

const GridInput = ({
    numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
    numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
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
  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < numberOfLargeBoxesTallAndNoOfSmallBoxesLong; a++) {
      // full soduku
      const thickRowLineLength = {width: `${(numberOfLargeBoxesLongAndNoOfSmallBoxesTall * ((2 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + 0.3 + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 0.1)))}em`}
      const rowLineThickLong = <div className="rowLineThickLong" style={thickRowLineLength}></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <ThreeLongSetOfLargeBoxesInput
        numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong} 
        numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
        a={a}
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
      fullGrid.push(grid)
    }
    return fullGrid
  }
  return <div>{createGrid()}</div>
}

export default GridInput
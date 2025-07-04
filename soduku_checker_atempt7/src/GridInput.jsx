import ThreeLongSetOfLargeBoxesInput from "./ThreeLongSetOfLargeBoxesInput"
import "./Grid.css"

const GridInput = ({
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
  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < numberOfLargeBoxesTallAndNoOfSmallBoxesLong; a++) {
      // full soduku
      const thickRowLineLength = {width: `${(numberOfLargeBoxesLongAndNoOfSmallBoxesTall * ((2 * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + 0.3 + ((numberOfLargeBoxesTallAndNoOfSmallBoxesLong - 1) * 0.1)))}em`}
      const rowLineThickLong = <div className="rowLineThickLong" style={thickRowLineLength}></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <ThreeLongSetOfLargeBoxesInput
        a={a}
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
      fullGrid.push(grid)
    }
    return fullGrid
  }
  return <div>{createGrid()}</div>
}

export default GridInput
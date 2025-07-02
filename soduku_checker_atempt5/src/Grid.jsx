import ThreeLongSetOfLargeBoxes from "./ThreeLongSetOfLargeBoxes"

const Grid = ({
    NoOfSmallBoxesLong,
    NoOfLargeBoxesLong,
    setResponce,
    defaultClassOfBox,
    arrayOfBoxes,
    numberOfBoxes,
    setClassOfBox,
    setWin,
    valueOfBox,
    setArrayOfBoxes,
    classOfBox,
    NoOfSmallBoxesTall,
    NoOfLargeBoxesTall,
}) => {
  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < NoOfLargeBoxesTall; a++) {
      // full soduku
      const thickRowLineLength = {width: `${(NoOfLargeBoxesLong * ((2 * NoOfSmallBoxesLong) + 0.3 + ((NoOfSmallBoxesLong - 1) * 0.1)))}em`}
      const rowLineThickLong = <div className="rowLineThickLong" style={thickRowLineLength}></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <ThreeLongSetOfLargeBoxes  
      NoOfSmallBoxesLong={NoOfSmallBoxesLong}
      NoOfLargeBoxesLong={NoOfLargeBoxesLong}
      a={a}
      setResponce={setResponce}
      defaultClassOfBox={defaultClassOfBox}
      arrayOfBoxes={arrayOfBoxes}
      numberOfBoxes={numberOfBoxes}
      setClassOfBox={setClassOfBox}
      setWin={setWin}
      valueOfBox={valueOfBox}
      setArrayOfBoxes={setArrayOfBoxes}
      classOfBox={classOfBox}
      NoOfSmallBoxesTall={NoOfSmallBoxesTall}/>
      fullGrid.push(grid)
    }
    return fullGrid
  }
  return <div>{createGrid()}</div>
}

export default Grid
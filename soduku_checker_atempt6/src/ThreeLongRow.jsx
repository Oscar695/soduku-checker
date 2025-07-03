import Box from "./Box";
import './ThreeLongRow.css'

const ThreeLongRow = ({
  a,
  b,
  c,
  setResponce,
  defaultClassOfBox,
  arrayOfBoxes,
  numberOfBoxes,
  setClassOfBox,
  setWin,
  valueOfBox,
  setArrayOfBoxes,
  classOfBox,
  numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
  numberOfLargeBoxesLongAndNoOfSmallBoxesTall,

}) => {
  // call in seperate function here
  // const preventError1 = arrayOfBoxes.map(inner => [...inner])
  // preventError1[largeBoxNumber][smallBoxNumber] = inputNumber
  // const preventError2 = preventError1
  // preventError2[g][h] = 0
  const createThreeLongRow = () => {
    const boxes = []
    for (let d = 0; d < numberOfLargeBoxesTallAndNoOfSmallBoxesLong; d++) {
      // line of 3 Small boxes
      const collemLineThickShort = <div className="collemLineThickShort"></div>
      if (d === 0) boxes.push(collemLineThickShort)
      let boxClass = "numberBox"
      const collemLineThin = <div className="collemLineThin"></div>
      if (d !== 0) boxes.push(collemLineThin)
      let smallBoxNumber = ((c * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + d)
      let largeBoxNumber = ((a * numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + b)
      const onInputChange = (event) => {
        let counter1 = 0
        const inputNumber = event.target.value
        if (((inputNumber < 1) || (inputNumber > numberOfBoxes)) && (inputNumber !== "")) setResponce(true)
        else setResponce(false)
        const updatedClassList1 = defaultClassOfBox.map(inner => [...inner])
        for (let g = 0; g < numberOfBoxes; g++) {
          for (let h = 0; h < numberOfBoxes; h++) {
            const updatedValuesList1 = arrayOfBoxes.map(inner => [...inner])
            updatedValuesList1[largeBoxNumber][smallBoxNumber] = inputNumber
            const updatedValuesList2 = updatedValuesList1
            const preventError1 = arrayOfBoxes.map(inner => [...inner])
            preventError1[largeBoxNumber][smallBoxNumber] = inputNumber
            const preventError2 = preventError1
            preventError2[g][h] = 0
            let currentNumber = updatedValuesList1[g][h]
            if ((typeof currentNumber === typeof "") && (currentNumber !== "")) {
              counter1 = (counter1 + parseInt(currentNumber))
              // box checker
              let doesLargeBoxContainDuplicats = (preventError2[g].includes(currentNumber))
              if (doesLargeBoxContainDuplicats) updatedClassList1[g][h] = "errorInputBox"
              for (let e = 0; e < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; e++) {
                for (let f = 0; f < numberOfLargeBoxesTallAndNoOfSmallBoxesLong; f++) { 
                  // row checker
                  let largeRowBox = (((Math.floor(g / numberOfLargeBoxesLongAndNoOfSmallBoxesTall)) * numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + e)
                  let smallRowBox = (((Math.floor(h / numberOfLargeBoxesTallAndNoOfSmallBoxesLong)) * numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + f)
                  let doesRowcontainDuplicates = (preventError2[largeRowBox][smallRowBox] === currentNumber)
                  if (doesRowcontainDuplicates) updatedClassList1[largeRowBox][smallRowBox] = "errorInputBox"
                  if (doesRowcontainDuplicates) updatedClassList1[g][h] = "errorInputBox"
                  // collem checker
                  let largeCollemBox = ((g % numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + (numberOfLargeBoxesLongAndNoOfSmallBoxesTall * e))
                  let smallCollemBox = ((h % numberOfLargeBoxesTallAndNoOfSmallBoxesLong) + (numberOfLargeBoxesTallAndNoOfSmallBoxesLong * f))
                  let doesCollemContainDuplicates = (preventError2[largeCollemBox][smallCollemBox] === currentNumber)
                  if (doesCollemContainDuplicates) updatedClassList1[largeCollemBox][smallCollemBox] = "errorInputBox"    
                  if (doesCollemContainDuplicates) updatedClassList1[g][h] = "errorInputBox"
                  setClassOfBox(updatedClassList1)
                  if ((updatedClassList1.includes("errorInputBox") === false) && (counter1 === (valueOfBox * numberOfBoxes))) setWin(true)
                  if (counter1 !== (valueOfBox * numberOfBoxes)) setWin(false)
                }
              }
            }
            setArrayOfBoxes(updatedValuesList2)  
          }
        }
      }
      const box = <Box classOfBox={classOfBox} largeBoxNumber={largeBoxNumber} smallBoxNumber={smallBoxNumber} onInputChange={onInputChange} boxClass={boxClass}/>
      boxes.push(box)
    }
    return boxes
  }
  return <div className="lineUp">{createThreeLongRow()}</div>
}

export default ThreeLongRow
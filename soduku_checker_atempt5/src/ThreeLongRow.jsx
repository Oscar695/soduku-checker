
  const ThreeLongRow = ({
    a, 
    b, 
    c,
    defaultClassOfBox,
    arrayOfBoxes,
    setClassOfBox,
    setArrayOfBoxes,
  }) => {
      
    const createThreeLongRow = () => {
      const boxes = []
      for (let d = 0; d < 3; d++) {
        // line of 3 Small boxes
        const collemLineThickShort = <div className="collemLineThickShort"></div>
        if (d === 0) boxes.push(collemLineThickShort)
        let boxClass = "numberBox"
        const collemLineThin = <div className="collemLineThin"></div>
        if (d !== 0) boxes.push(collemLineThin)
        let smallBoxNumber = ((c * 3) + d)
        let largeBoxNumber = ((a * 3) + b)
        const onInputChange = (event) => {
          const inputNumber = event.target.value
          const updatedClassListMinus1 = defaultClassOfBox.map(inner => [...inner])
          for (let g = 0; g < 9; g++) {
            for (let h = 0; h < 9; h++) {
              const updatedValuesList1 = arrayOfBoxes.map(inner => [...inner])
              updatedValuesList1[largeBoxNumber][smallBoxNumber] = inputNumber
              const updatedValuesList2 = updatedValuesList1
              const preventError1 = arrayOfBoxes.map(inner => [...inner])
              preventError1[g][h] = 0
              let currentNumber = updatedValuesList1[g][h]
              if (typeof currentNumber === typeof "") {
                const updatedClassList0 = updatedClassListMinus1
                let doesLargeBoxContainDuplicats = (preventError1[g].includes(currentNumber))
                const updatedClassList1 = updatedClassList0
                if (doesLargeBoxContainDuplicats) updatedClassList1[g][h] = "errorInputBox"
                const updatedClassList2 = updatedClassList1
                // let otherNumber = 0
                // if (doesLargeBoxContainDuplicats) updatedClassList2[g][otherNumber] = "errorInputBox"
                const updatedClassList3 = updatedClassList2
                for (let e = 0; e < 3; e++) {
                  for (let f = 0; f < 3; f++) { 
                    // row checker
                    let largeRowBox = (((Math.floor(g / 3)) * 3) + e)
                    let smallRowBox = (((Math.floor(h / 3)) * 3) + f)
                    let doesRowcontainDuplicates = (preventError1[largeRowBox][smallRowBox] === currentNumber)
                    if (doesRowcontainDuplicates) updatedClassList3[largeRowBox][smallRowBox] = "errorInputBox"
                    const updatedClassList4 = updatedClassList3
                    if (doesRowcontainDuplicates) updatedClassList3[g][h] = "errorInputBox"
                    const updatedClassList5 = updatedClassList4
                    // collem checker
                    let largeCollemBox = ((g % 3) + (3 * e))
                    let smallCollemBox = ((h % 3) + (3 * f))
                    let doesCollemContainDuplicates = (preventError1[largeCollemBox][smallCollemBox] === currentNumber)
                    if (doesCollemContainDuplicates) updatedClassList5[largeCollemBox][smallCollemBox] = "errorInputBox"
                    const updatedClassList6 = updatedClassList5     
                    if (doesCollemContainDuplicates) updatedClassList6[g][h] = "errorInputBox"
                    setClassOfBox(updatedClassList6)
                  }
                }
              }
              setArrayOfBoxes(updatedValuesList2)  
            }
          }
        }
        const input = <input type="number" autoComplete="off" id="guessImput" className={classOfBox[largeBoxNumber][smallBoxNumber]} onChange={onInputChange}/>
        const box = <div className={boxClass}>{input}</div>
        boxes.push(box)
      }
      return <div>{createThreeLongRow()}</div>
    }
  }
  
export default ThreeLongRow
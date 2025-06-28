import { useEffect, useState } from 'react'
import './App.css'
import ErrorChecker from './ErrorChecker'
// import ErrorChecker from './ErrorChecker'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [numbers, setNumbers] = useState(new Array(81).fill([]))
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [hasWon, setHasWon] = useState(false)
  const [answer, setAnswer] = useState("")
  const [invalidNumber, setInvalidNumber] = useState(false)
  const [loss, setLoss] = useState(false)
  const [counter, setCounter] = useState(0)
  const [listUpdater, setListUpdater] = useState(true)
  const [truth, setTruth] = useState(false)
  const [hello, setHello] = useState(new Array(81).fill("inputBox"))
  const [incorectBox, setIncorrectBox] = useState(0)

  const createRow = (rowIndex) => {

    const boxes = []
  
    for (let i = 0; i < 9; i++) {
      const collemLineThick = <div className="collemLineThick"></div>
      if (i === 0 || i === 3 || i === 6) boxes.push(collemLineThick)
      let boxClass = "numberBox"
      const collemLineThin = <div className="collemLineThin"></div>
      if (i !== 0 && i !== 3 && i !== 6) boxes.push(collemLineThin)
        
      const [value, setValue] = useState()
      

      const onInputChange = (event) => { 
        let inputNumber = event.target.value
        let positionInArray = ((rowIndex * 9) + i)
        // if (inputNumber === "") {
        //     const updatedList9 = [...hello]
        //     updatedList9[positionInArray] = "inputBox"
        //     setHello(updatedList9)
        // }
        setValue(inputNumber)
        const updatedList = [...numbers]
        updatedList[positionInArray] = inputNumber
        setNumbers(updatedList)
        
        //gets locations of box a in array of 81 arrays((3*b - 2*(b - (Math.floor(b / 3) * 3))) + 3 * a)
        
        for (let a = 0; a < 9; a++) {
          for (let b = 0; b < 9; b++) {
            console.log((numbers[((3*b - 2*(b - (Math.floor(b / 3) * 3))) + 3 * a)] === inputNumber))
            if (numbers[((3*b - 2*(b - (Math.floor(b / 3) * 3))) + 3 * a)] === inputNumber) {
              const hello6 = [...arrayOfBoxes]
              hello6[a][b] = inputNumber
              setArrayOfBoxes(hello6)
              console.log(hello6)
              console.log(arrayOfBoxes)
              }
          }
        }

        for (let a = 0; a < 9; a++) {
          //row checker
          if ((numbers[(rowIndex * 9) + a] === inputNumber) === true) {
            const updatedList2 = [...hello]
            updatedList2[positionInArray] = "errorInputBox"
            const updatedList3 = updatedList2
            updatedList3[(rowIndex * 9) + a] = "errorInputBox"
            setHello(updatedList3)
          }
          //collom checker
          const collemNumber = (positionInArray - (rowIndex * 9)) 
          if ((numbers[collemNumber + (9 * a)] === inputNumber) === true) {
            const updatedList2 = [...hello]
            updatedList2[positionInArray] = "errorInputBox"
            const updatedList3 = updatedList2
            updatedList3[collemNumber + (9 * a)] = "errorInputBox"
            setHello(updatedList3)
          }
          //box checker
          
          // const boxDuplicants = () => {
          //   // collemNumber  3
          //   // rowIndex  5
          //   // 0         ,1,2,9,10,11,18,19,20
          //   // 3         ,4,5,12,13,14,21,22,23
          //   // 6         ,7,8,15,16,17,24,25,26
          //   // 27
          //   // 30
          //   // 33
          //   // 54
          //   // 57
          //   // 60
           
          // for (let b = 0; b < 9; b++) {
          //     let number1 = ((3*b - 2*(b - (Math.floor(b / 3) * 3))))
          //     let hello4 = new Array(1).fill(new Array(1).fill([number1]))
          //     setBox1(box1 + hello4)
          //     let hello5 = (box1 + hello4)
          //   //  console.log(box1+hello4)
          //     let incorectBoxPosition = ((3*b - 2*(b - (Math.floor(b / 3) * 3))) + 1)
          //     if ((hello5[b] === inputNumber) && (positionInArray !== incorectBoxPosition)) setIncorrectBox(incorectBoxPosition)
          //     if (hello5.includes(inputNumber) === true) return true             
          //   }
          //   for (let b = 0; b < 9; b++) {
          //     let number2 = ((3*b - 2*(b - (Math.floor(b / 3) * 3))) + 3)
          //     let box2 = new Array(1).fill(new Array(1).fill([number2]))
              
          //     //console.log(box2)
          //     let incorectBoxPosition = ((3*b - 2*(b - (Math.floor(b / 3) * 3))) + 1)
          //     if ((box2[b] === inputNumber) && (positionInArray !== incorectBoxPosition)) setIncorrectBox(incorectBoxPosition)
          //     if (box2.includes(inputNumber) === true) return true             
          //   }
            
          // }
          // if (boxDuplicants() === true) {
          //   const updatedList2 = [...hello]
          //   updatedList2[positionInArray] = "errorInputBox"
          //   const updatedList3 = updatedList2
          //   updatedList3[incorectBox] = "errorInputBox"
          //   //console.log(incorectBox)
          //   setHello(updatedList3)
          // }

      
        // <ErrorChecker
        //   numbers={numbers}
        //   positionInArray={positionInArray}
        //   inputNumber={inputNumber} 
        //   rowIndex={rowIndex} 
        //   setHello={setHello} 
        //   hello={hello}
        // 
        // dont know what to return    
        }
      }
        const input = <input type="number" autoComplete="off" id="guessImput" className={hello[(rowIndex * 9) + i]} onChange={onInputChange}/>
        const box = <div className={boxClass}>{input}</div>
        boxes.push(box)
        if (i === 8) boxes.push(collemLineThick)
    }
    return boxes
  }

  const createGrid = () => {
    const grid = []

    for (let i = 0; i < 9; i++) {
      const rowLineThick = <div className="rowLineThick"></div>
      const rowLineThin = <div className="rowLineThin"></div>
      if (i !== 0 && i !== 3 && i !== 6) grid.push(rowLineThin)
      if (i === 0 || i === 3 || i === 6) grid.push(rowLineThick)
      const row = <div className="boxRow">{createRow(i)}</div>
      grid.push(row)
      if (i === 8) grid.push(rowLineThick)
    }
    return grid
  }

const onSubmitGuess = (event) => {
  event.preventDefault()
  setGuesses([...guesses, currentGuess])
  setCurrentGuess("")
}

  return (
    <>
{/* 

      <div>
      {(hasWon) ? <p className="result-text">You Win</p> : null}
      {(invalidNumber) ? <p className="result-text">Enter valid number</p> : null}
      </div> */}

      <div>
          {createGrid()}
      </div>
{/*       
      <form onSubmit={onSubmitGuess}>
        <div className="imputbox"> 
          <input type="text" value={currentGuess} id="guessImput" onChange={onImputChange}/>
        </div> 

        <div>
          <button onClick={() => console.log("clicked")}>
            Submit
          </button>
        </div> 
      </form> */}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [numbers, setNumbers] = useState(new Array(81).fill([]))
  const [hasWon, setHasWon] = useState(false)
  const [answer, setAnswer] = useState("")
  const [invalidNumber, setInvalidNumber] = useState(false)
  const [loss, setLoss] = useState(false)
  const [counter, setCounter] = useState(0)
  const [listUpdater, setListUpdater] = useState(true)

  new Array(81).fill([])

  const createRow = (rowIndex) => {

    const boxes = []
  
    for (let i = 0; i < 9; i++) {
      const collemLineThick = <div className="collemLineThick"></div>
      if (i === 0 || i === 3 || i === 6) boxes.push(collemLineThick)
      const boxClass = "numberBox"
      const collemLineThin = <div className="collemLineThin"></div>
      if (i !== 0 && i !== 3 && i !== 6) boxes.push(collemLineThin)
        
      const [value, setValue] = useState()

      const onInputChange = (event) => { 
        let value2 = event.target.value
        setValue(value2)
        let value3 = ((rowIndex * 9) + i)
        const updatedList = [...numbers]
        updatedList[value3] = value2
        setNumbers(updatedList)
        console.log(updatedList)
       }
        const input = <input type="number" autoComplete="off"  id="guessImput" className="inputBox" onChange={onInputChange}/>
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

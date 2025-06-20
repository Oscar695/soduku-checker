import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([])
  const [hasWon, setHasWon] = useState(false)
  const [answer, setAnswer] = useState("")
  const [invalidNumber, setInvalidNumber] = useState(false)
  const [loss, setLoss] = useState(false)

  const createRow = (rowIndex) => {
    const boxes = []

    for (let i = 0; i < 9; i++) {
      const [value, setValue] = useState()
      const onInputChange = (event) => {
        let value2 = event.target.value
        setValue(value2)
      }
      const input = <input type="number" id="guessImput" onChange={onInputChange}/>
      const boxClass = "numberBox"
      const box = <div className={boxClass}>{input}{value}</div>
      boxes.push(box)
    }
    return boxes
  }

  const createGrid = () => {
    const grid = []

    for (let i = 0; i < 9; i++) {
      const row = <div className="boxRow">{createRow(i)}</div>
      grid.push(row)
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

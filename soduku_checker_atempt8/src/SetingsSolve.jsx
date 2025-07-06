import './Settings.css'

const SetingsSolve = ({
    largeNumbers,
    smallNumbers,
    largeNumbersButton,
    smallCenterNumbers,
    smallNumbersButton,
    largeNumbersButtonPresed,
    smallCenterNumbersButton,
    smallNumbersButtonPresed,
    smallCenterNumbersButtonPresed,
}) => {

    const hello2 = (a, string) => {
        const threeLongSolveBoxes = []
        for (let b = 0; b < 3; b++) {
            let input = <div> <div className="lineUp"><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 1) ? 1 : " "}</div><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 2) ? 2 : " "}</div><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 3) ? 3 : " "}</div></div> <div className="lineUp"><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 4) ? 4 : " "}</div><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 5) ? 5 : " "}</div><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 6) ? 6 : " "}</div></div> <div className="lineUp"><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 7) ? 7 : " "}</div><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 8) ? 8 : " "}</div><div className="cornerNumberSize">{((((3 * a) + b) + 1) === 9) ? 9 : " "}</div></div></div>
            const box = <button className={string}>{input}</button>
            threeLongSolveBoxes.push(box)
        }
        return threeLongSolveBoxes
    }

    const hello = (a, string) => {
        const threeLongSolveBoxes = []
        for (let b = 0; b < 3; b++) {
            const input = (((3 * a) + b) + 1).toString()
            const box = <button className={string}>{input}</button>
            threeLongSolveBoxes.push(box)
        }
        return threeLongSolveBoxes
    }
//
//     1 2 3 <br />
//     4 5 6 <br />
//     7 8 9
//
    const createThreeLongSolveBoxes = (string) => {
        const fullLargeSolveBoxes = []
        for (let a = 0; a < 3; a++) {
            let line = <div></div>
            if (string !== "buttonSmallNumbers") line = <div className="lineUp">{hello(a, string)}</div>
            else line = <div className="lineUp">{hello2(a, string)}</div>
            fullLargeSolveBoxes.push(line)
        }
        return fullLargeSolveBoxes
    }
    const theLargeNumbers = () => {
        return (
            <div>
                {createThreeLongSolveBoxes("buttonLargeNumbers")}
            </div>
        )
    }
    const theSmallNumbers = () => {
        return (
            <div>
                {createThreeLongSolveBoxes("buttonSmallNumbers")}
            </div>
        )
    }
    const theSmallCenterNumbers = () => {
        return (
            <div>
                {createThreeLongSolveBoxes("buttonSmallCenterNumbers")}
            </div>
        )
    }

    const createSetings = () => {
        const setings = (
            <div className="lineUp">
                <div>
                    {largeNumbers ? theLargeNumbers() : null}
                    {smallNumbers ? theSmallNumbers() : null}
                    {smallCenterNumbers ? theSmallCenterNumbers() : null}
                </div>
                <div>
                    <div>
                        <button className={largeNumbersButton} onClick={largeNumbersButtonPresed}>1</button>
                    </div>
                    <div>
                        <button className={smallNumbersButton} onClick={smallNumbersButtonPresed}>
                            1 2<br />
                            3 4
                        </button>
                    <div>
                        <button className={smallCenterNumbersButton} onClick={smallCenterNumbersButtonPresed}>1 2</button>
                    </div>
                    </div>
                </div>
            </div>
        )
        return setings
    }  
    return <div className="setings">{createSetings()}</div>
}

export default SetingsSolve

// "smallCenterNumbers"
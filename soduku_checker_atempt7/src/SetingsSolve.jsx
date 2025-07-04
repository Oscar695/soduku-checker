import './Settings.css'

const SetingsSolve = ({
    largeNumbers,
    smallNumbers,
    largeNumbersButton,
    smallNumbersButton,
    largeNumbersButtonPresed,
    smallNumbersButtonPresed,
}) => {
    const hello = (a, string) => {
        const threeLongSolveBoxes = []
        for (let b = 0; b < 3; b++) {
            const input = (((3 * a) + b) + 1).toString()
            const box = <button className={string}>{input}</button>
            threeLongSolveBoxes.push(box)
        }
        return threeLongSolveBoxes
    }

    const createThreeLongSolveBoxes = (string) => {
        const fullLargeSolveBoxes = []
        for (let a = 0; a < 3; a++) {
            const line = <div className="lineUp">{hello(a, string)}</div>
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

    const createSetings = () => {
        const setings = (
            <div className="lineUp">
                <div>
                    {largeNumbers ? theLargeNumbers() : null}
                    {smallNumbers ? theSmallNumbers() : null}
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
                    </div>
                </div>
            </div>
        )
        return setings
    }  
    return <div className="setings">{createSetings()}</div>
}

export default SetingsSolve
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
            const box = <div className={string}>{(((3 * a) + b) + 1)}</div> 
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
                        <input type="button" className={largeNumbersButton} value={"1"} onClick={largeNumbersButtonPresed} />
                    </div>
                    <div>
                        <input type="button" className={smallNumbersButton} value={"1 2 3 4"} onClick={smallNumbersButtonPresed} />
                    </div>
                </div>
            </div>
        )
        return setings
    }  
    return <div className="setings">{createSetings()}</div>
}

export default SetingsSolve
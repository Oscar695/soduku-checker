import './Settings.css'
import EdgeNumbersGridButton from "./EdgeNumbersGridButton"

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

    const createGenericSettingsButton = (a, string) => {
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
            if (string !== "buttonSmallNumbers") line = <div className="lineUp">{createGenericSettingsButton(a, string)}</div>
            else line = <div className="lineUp">
                <EdgeNumbersGridButton 
                    a={a}
                    string={string}
                />
            </div>
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
    const hello = <div><div>6</div><div>hello</div></div>
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
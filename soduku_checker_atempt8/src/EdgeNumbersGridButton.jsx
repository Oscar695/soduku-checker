const EdgeNumbersGridButton = ({
    a,
    string,
}) => {
    const createEdgeNumbersGrid = () => {
        const threeLongSolveBoxes = []
        for (let b = 0; b < 3; b++) {
            let equation = (((3 * a) + b) + 1)
            let input = <div> 
                <div className="lineUp">
                    <div className="cornerNumberSize">{(equation === 1) ? 1 : " "}</div>
                    <div className="cornerNumberSize">{(equation === 2) ? 2 : " "}</div>
                    <div className="cornerNumberSize">{(equation === 3) ? 3 : " "}</div>
                </div> 
                <div className="lineUp">
                    <div className="cornerNumberSize">{(equation === 4) ? 4 : " "}</div>
                    <div className="cornerNumberSize">{(equation === 5) ? 5 : " "}</div>
                    <div className="cornerNumberSize">{(equation === 6) ? 6 : " "}</div>
                </div> <div className="lineUp">
                    <div className="cornerNumberSize">{(equation === 7) ? 7 : " "}</div>
                    <div className="cornerNumberSize">{(equation === 8) ? 8 : " "}</div>
                    <div className="cornerNumberSize">{(equation === 9) ? 9 : " "}</div>
                </div>
            </div>
            const box = <button className={string}>{input}</button>
            threeLongSolveBoxes.push(box)
        }
        return threeLongSolveBoxes
    }
    return <div>{createEdgeNumbersGrid()}</div>
}

export default EdgeNumbersGridButton
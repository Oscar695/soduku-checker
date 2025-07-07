const EdgeNumbersGridSolve = ({
    string,
    largeBoxNumber,
    smallBoxNumber,
    arrayOfBoxesSmallEdge,
}) => {
    const createEdgeNumbersGrid = () => {
        const threeLongSolveBoxes = []
        for (let b = 0; b < 1; b++) {
            let whereIsTheNumber = arrayOfBoxesSmallEdge[largeBoxNumber][smallBoxNumber]
            console.log(whereIsTheNumber)
            console.log(arrayOfBoxesSmallEdge)
            let input = <div> 
                <div className="lineUp">
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(1)) ? 1 : " "}</div>
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(2)) ? 2 : " "}</div>
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(3)) ? 3 : " "}</div>
                </div> 
                <div className="lineUp">
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(4)) ? 4 : " "}</div>
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(5)) ? 5 : " "}</div>
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(6)) ? 6 : " "}</div>
                </div> <div className="lineUp">
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(7)) ? 7 : " "}</div>
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(8)) ? 8 : " "}</div>
                    <div className="cornerNumberSize">{(whereIsTheNumber.includes(9)) ? 9 : " "}</div>
                </div>
            </div>
            const box = <div className={string}>{input}</div>
            threeLongSolveBoxes.push(box)
        }
        return threeLongSolveBoxes
    }
    return <div className="shiftUp">{createEdgeNumbersGrid()}</div>
}

export default EdgeNumbersGridSolve
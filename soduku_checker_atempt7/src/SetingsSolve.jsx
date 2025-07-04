import './Settings.css'

const SetingsSolve = ({
    smallNumbers,
    largeNumbersButton,
    smallNumbersButton,
    largeNumbersButtonPresed,
    smallNumbersButtonPresed
}) => {
    const createSetings = () => {
        const setings = (
            <div>
                <div>
                    <input type="button" className={largeNumbersButton} value={"1"} onClick={largeNumbersButtonPresed} />
                </div>
                <div>
                    <input type="button" className={smallNumbersButton} value={smallNumbers} onClick={smallNumbersButtonPresed} />
                </div>
            </div>
        )
        return setings
    }  
    return <div className="setings">{createSetings()}</div>
}

export default SetingsSolve
import './Settings.css'

const Setings = ({
    largeBoxHightSmallBoxWidth,
    largeBoxWidthSmallBoxHight,
    numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
    numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
}) => {
  const createSetings = () => {
    const setings =  (
      <div>
        <div>
          <div>
            <div className="longBox">Grid size</div>
            <div>
              3 by 3
              <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight"/>
            </div>
            <div>
              3 by 2
              <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight"/>
            </div>
            <div>
              4 by 4
              <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight"/>
            </div>
          </div>
        </div>
      </div>
    )
    return setings
  }
  return <div className="setings">{createSetings()}</div>
}

export default Setings


{/* <div>
<div>
  Grid size
</div>
<div className="words">
  Width  
  <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight" value={numberOfLargeBoxesTallAndNoOfSmallBoxesLong} onChange={largeBoxHightSmallBoxWidth}/>
</div>
<div className="words">
  Length   
  <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight" value={numberOfLargeBoxesLongAndNoOfSmallBoxesTall} onChange={largeBoxWidthSmallBoxHight}/>
</div>
</div> */}

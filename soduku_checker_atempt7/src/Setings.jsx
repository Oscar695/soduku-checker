import './Settings.css'

const Setings = ({
  checked2By2,
  checked3By2,
  checked3By3,
  preMadeGrid2By2,
  preMadeGrid3By2,
  preMadeGrid3By3,
  largeBoxHightSmallBoxWidth,
  largeBoxWidthSmallBoxHight,
  numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
  numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
}) => {
  const createSetings = () => {
    const setings =  (
      <div>
        <div className="setingsBox">
          {/* grid specs */}
          <div>
            <div className="words" >Grid size</div>
            <div className="setingsLineSeperator"></div>
            <div className="words" >
              3 by 3
              <input type="checkbox" id="" className="inputBoxWidthAndHight" onChange={preMadeGrid3By3} checked={checked3By3} />
            </div>
            <div className="setingsLineSeperator"></div>
            <div className="words" >
              3 by 2
              <input type="checkbox" id="" className="inputBoxWidthAndHight" onChange={preMadeGrid3By2} checked={checked3By2} />
            </div>
            <div className="setingsLineSeperator"></div>
            <div className="words" >
              2 by 2
              <input type="checkbox" id="" className="inputBoxWidthAndHight" onChange={preMadeGrid2By2} checked={checked2By2} />
            </div>
            <div className="setingsLineSeperator"></div>
            <div className="words">Custom</div>
            <div className="setingsLineSeperator"></div>
            <div className="words">
              Width  
              <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight" value={numberOfLargeBoxesTallAndNoOfSmallBoxesLong} onChange={largeBoxHightSmallBoxWidth}/>
            </div>
            <div className="setingsLineSeperator"></div>
            <div className="words">
              Length   
              <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight" value={numberOfLargeBoxesLongAndNoOfSmallBoxesTall} onChange={largeBoxWidthSmallBoxHight}/>
            </div>
          </div>
          <div>
            
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
  onToggle
  onSubmit
  onInput
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

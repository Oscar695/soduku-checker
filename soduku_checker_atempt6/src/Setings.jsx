import './Settings.css'

const Setings = ({
    largeBoxHightSmallBoxWidth,
    largeBoxWidthSmallBoxHight,
}) => {
  const createSetings = () => {
    const setings =  (
      <div>
        <div>
          <div>
            Grid size
          </div>
          <div className="words">
            Width  
            <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight" onChange={largeBoxHightSmallBoxWidth}/>
          </div>
          <div className="words">
            Length   
            <input type="number" autoComplete="off" id="" className="inputBoxWidthAndHight" onChange={largeBoxWidthSmallBoxHight}/>
          </div>
        </div>
      </div>
    )
    return setings
  }
  return <div className="setings">{createSetings()}</div>
}

export default Setings
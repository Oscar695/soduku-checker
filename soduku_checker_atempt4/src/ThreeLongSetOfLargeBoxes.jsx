  
  const ThreeLongSetOfLargeBoxes = ({a}) => {
    const createThreeLongSetOfLargeBoxes = () => { 
      const threeLongSetOfLargeBoxes = []
      for (let b = 0; b < 3; b++) {
        // 3 large boxs
        const collemLineThickLong = <div className="collemLineThickLong"></div>
        const rowOfLargeBoxes = <div>{createLargeBox(a, b)}</div>
        threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
        if (b === 2) threeLongSetOfLargeBoxes.push(collemLineThickLong)
          console.log("hello")
      }
      return threeLongSetOfLargeBoxes
    }
    return <div>{createThreeLongSetOfLargeBoxes(a)}</div>
  }  
export default ThreeLongSetOfLargeBoxes
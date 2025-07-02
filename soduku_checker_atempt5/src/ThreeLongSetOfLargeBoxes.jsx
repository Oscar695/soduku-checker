import LargeBox from "./LargeBox"

  const ThreeLongSetOfLargeBoxes = ({
      NoOfSmallBoxesLong,
      NoOfLargeBoxesLong,
      a,
      setResponce,
      defaultClassOfBox,
      arrayOfBoxes,
      numberOfBoxes,
      setClassOfBox,
      setWin,
      valueOfBox,
      setArrayOfBoxes,
      classOfBox,
      NoOfSmallBoxesTall,
  }) => {
    const createThreeLongSetOfLargeBoxes = () => {
      const threeLongSetOfLargeBoxes = []
      for (let b = 0; b < NoOfLargeBoxesLong; b++) {
        // 3 large boxs
        const thickCollemHight = {height: `${(2 * NoOfSmallBoxesTall) + ((NoOfSmallBoxesTall - 1) * 0.1)}em`}
        const collemLineThickLong = <div className="collemLineThickLong" style={thickCollemHight}></div>
        const rowOfLargeBoxes = <LargeBox
        NoOfSmallBoxesLong={NoOfSmallBoxesLong}
        NoOfLargeBoxesLong={NoOfLargeBoxesLong}
        a={a}
        b={b}
        setResponce={setResponce}
        defaultClassOfBox={defaultClassOfBox}
        arrayOfBoxes={arrayOfBoxes}
        numberOfBoxes={numberOfBoxes}
        setClassOfBox={setClassOfBox}
        setWin={setWin}
        valueOfBox={valueOfBox}
        setArrayOfBoxes={setArrayOfBoxes}
        classOfBox={classOfBox}
        NoOfSmallBoxesTall={NoOfSmallBoxesTall}/>
        threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
        if (b === (NoOfLargeBoxesLong - 1)) threeLongSetOfLargeBoxes.push(collemLineThickLong)
      }
      return threeLongSetOfLargeBoxes
    }
    return <div className="lineUp">{createThreeLongSetOfLargeBoxes()}</div>
  }  

export default ThreeLongSetOfLargeBoxes
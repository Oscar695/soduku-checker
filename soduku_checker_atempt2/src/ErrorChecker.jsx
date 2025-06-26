const ErrorChecker = ({numbers, positionInArray, inputNumber, rowIndex}) => {
    //inputNumber in position 12
    //row compare with positions 9 to 17 excluding 12
    //collom compare with positons 12 +- 9x > 81 but not 12
    //box compare with positions 3, 4, 5, 12, 13, 14, 21, 22, 23 but not 12
    let result = true
    
    for (let i = 0; i < 8; i++) {
        result = (numbers[(rowIndex * 9) + i] === inputNumber)
        console.log(result)
    }
    
    return (
        {result}
    )
}

export default ErrorChecker
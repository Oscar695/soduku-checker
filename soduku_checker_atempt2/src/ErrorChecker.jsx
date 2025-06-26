const ErrorChecker = ({numbers, positionInArray, inputNumber, rowIndex, setHello, hello, }) => {
    //row checker
    for (let a = 0; a < 9; a++) {
        if ((numbers[(rowIndex * 9) + a] === inputNumber) === true) {
        const updatedList2 = [...hello]
        updatedList2[positionInArray] = "errorInputBox"
         const updatedList3 = updatedList2
         updatedList3[(rowIndex * 9) + a] = "errorInputBox"
        setHello(updatedList3)
        }
    } 
    //collom checker
    for (let b = 0; b < 9; b++) {

    }

    return hello
}

export default ErrorChecker
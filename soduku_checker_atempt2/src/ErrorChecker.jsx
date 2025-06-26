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

        //collom checker
        const collemNumber = (positionInArray - (rowIndex * 9)) 
        if ((numbers[collemNumber + (9 * a)] === inputNumber) === true) {
            const updatedList2 = [...hello]
            updatedList2[positionInArray] = "errorInputBox"
            const updatedList3 = updatedList2
            updatedList3[collemNumber + (9 * a)] = "errorInputBox"
            setHello(updatedList3)
        }
    }
    
    return hello
}

export default ErrorChecker
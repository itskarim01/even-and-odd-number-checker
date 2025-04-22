function numChecker() {
    // Create a variable for collecting the value from the user
    let number = parseFloat(document.getElementById('number').value)

    // Create a variable for handling the error when the value is empty
    let xNumber = document.getElementById('number').value

    // Variables for handling the error when the value is a string
    const noString = xNumber
    const regEx = /[a-z]/
    const srtgChecker = regEx.test(noString)

    // Handle input error when the value is empty
    if (xNumber === '') {
        document.getElementById('error').innerText = 'Please Enter a Number'
    }
    // Handle input error when the user inserted a string
    else if (srtgChecker === true) {
        document.getElementById('error').innerText = 'Value must be a Number'
    }
    // Compute the given number input to return an even or odd number
    else if (number % 2 == 0) {
        document.getElementById('error').innerText = ''
        alert(`${number} is an EVEN number`)
    } else {
        document.getElementById('error').innerText = ''
        alert(`${number} is an ODD number`)
    }
}
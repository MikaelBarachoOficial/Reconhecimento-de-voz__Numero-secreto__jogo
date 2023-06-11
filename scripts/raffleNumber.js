var maximumValue = 1000
var minimumValue = 1

const maximumValueElement = document.getElementById('maior-valor')
maximumValueElement.innerHTML = maximumValue
const minimumValueElement = document.getElementById('menor-valor')
minimumValueElement.innerHTML = minimumValue

var secretNumber = raffleNumber()

function raffleNumber () {
    return Math.floor(Math.random() * maximumValue + 1)
}

console.log(`Secret Number: ${secretNumber}`)

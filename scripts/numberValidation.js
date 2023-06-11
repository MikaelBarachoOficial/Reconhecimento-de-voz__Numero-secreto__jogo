const message = document.getElementById('message')
const remainingAttemptsElement = document.getElementById('remaining-attempts')
var remainingAttempts = 10

remainingAttemptsElement.innerHTML = `Você tem ${remainingAttempts} tentativas`

function checkIfNumberIsValid (attempt) {
    const number = +attempt
    
    if (checkIfTheNumberIsHigherOrLowerThanAccepted(number)) {
        console.log(`Invalid Value: ${number} must be between ${minimumValue} and ${maximumValue}`)
        message.innerHTML = `Valor Inválido: o número deve estar entre ${minimumValue} e ${maximumValue}`

    } else if (checkIfItIsANumber(number)) {
        console.log(`Invalid Value: ${number}`)
        message.innerHTML = 'Valor Inválido: não é um número!'
    
    } else if (number < secretNumber) {
        message.innerHTML = '<i class="fa-solid fa-up-long fa-beat-fade" style="color: #ffffff;"></i> O número secreto é maior <i class="fa-solid fa-up-long fa-beat-fade" style="color: #ffffff;"></i>'
    
        remainingAttempts--
        remainingAttemptsElement.innerHTML = `Você tem ${remainingAttempts} tentativas`

    } else if (number > secretNumber) {
        message.innerHTML = '<i class="fa-solid fa-down-long fa-beat-fade" style="color: #ffffff;"></i> O número secreto é menor <i class="fa-solid fa-down-long fa-beat-fade" style="color: #ffffff;"></i>'
        
        remainingAttempts--
        remainingAttemptsElement.innerHTML = `Você tem ${remainingAttempts} tentativas`

    } else if (number === secretNumber) {
        document.body.style.backgroundColor = 'green'
        document.body.innerHTML = `
            <h2 class="titulo">Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button id='retry'>Jogar Novamente</button>
        `
    }

    if (remainingAttempts === 0) {
        document.body.style.backgroundColor = 'black'
        document.body.innerHTML = `
            <h2 class="titulo">Game Over</h2>
            <h3>O número Secreto era ${secretNumber}</h3>

            <button id='retry'>Jogar Novamente</button>
        `
        return
    }

}

function checkIfItIsANumber (number) {
    return Number.isNaN(number)
}

function checkIfTheNumberIsHigherOrLowerThanAccepted (number) {
    return number > maximumValue || number < minimumValue
}

document.body.addEventListener('click', event => {
    if (event.target.id == 'retry') {
        window.location.reload()
    }
})
const message = document.getElementById('message')

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
    
    } else if (number > secretNumber) {
        message.innerHTML = '<i class="fa-solid fa-down-long fa-beat-fade" style="color: #ffffff;"></i> O número secreto é menor <i class="fa-solid fa-down-long fa-beat-fade" style="color: #ffffff;"></i>'
        
    } else if (number === secretNumber) {
        document.querySelector('.game').innerHTML = `
            <h2 class="titulo">Você acertou!</h2>
            <h3>O número Secreto era ${secretNumber}
        `
    }

}

function checkIfItIsANumber (number) {
    return Number.isNaN(number)
}

function checkIfTheNumberIsHigherOrLowerThanAccepted (number) {
    return number > maximumValue || number < minimumValue
}
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
const attemptBox = document.querySelector('.box')

recognition.lang = "pt-br"

recognition.start()

recognition.addEventListener('result', onSpeak)

recognition.addEventListener('end', () => recognition.start())

function onSpeak (event) {
    let attempt = event.results[0][0].transcript
    checkIfNumberIsValid(attempt)
    showAttempt(attempt)
}

function showAttempt (attempt) {
    attemptBox.innerHTML = attempt
}

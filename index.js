let guessBtn = document.getElementById('guessBtn')
let feedback = document.getElementById('feedback')
let playAgainBtn = document.getElementById('playAgainBtn')
let guessInput = document.getElementById('guessInput')
let number = Math.floor(Math.random() * 100) + 1


guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value)

    if (guess === number) {
        feedback.innerHTML = 'You guessed right!'
        playAgainBtn.style.display = 'block'
    } else if (guess < number) {
        feedback.innerHTML = 'You guessed too low!'
    } else {
        feedback.innerHTML = 'You guessed too high!'
    }
});

playAgainBtn.addEventListener('click', function() {
    playAgainBtn.style.display = 'none'
    number = Math.floor(Math.random() * 100) + 1;
    feedback.innerHTML = ''
    guessInput.value = ''
});

window.addEventListener('load', function() {
    number = Math.floor(Math.random() * 100) + 1
    feedback.innerHTML = ''
    guessInput.value = ''
})

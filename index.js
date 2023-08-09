let guessInput = document.getElementById('guessInput')

let guessBtn = document.getElementById('guessBtn')

let feedback = document.getElementById('feedback')

let playAgainBtn = document.getElementById('playAgainBtn')

let number = Math.floor(Math.random() * 100 + 1)

guessBtn.addEventListener('click' ,function() {

   let guess = parseInt(guessInput.value) 
    if (guess === number) {
        feedback.innerHTML = 'You guessed Right!'
        playAgainBtn.style.display = 'block'
    }

    else if  ( guess < number) {
        feedback.innerHTML = 'You guessed to low!'
    }

    else  {
        feedback.innerHTML = 'You guessed too high!'
    }
   

}) 

playAgainBtn.addEventListener('click', function() {
    playAgainBtn.style.display = 'none'
    number = Math.floor(Math.random() * 100 + 1)
    feedback.innerHTML = ''
    guessInput.value = ''
}

)

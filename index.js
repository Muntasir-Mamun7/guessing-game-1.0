let guessBtn = document.getElementById('guessBtn')
let feedback = document.getElementById('feedback')

let number = [Math.floor(Math.random() * 100) + 1]

guessBtn.addEventListener('click',function() {

    let guessInput = document.getElementById('guessInput').value;

    if (guessInput == number) {
        feedback.innerHTML = `You guessed right!`
    }

    else if (guessInput < number) {
        feedback.innerHTML =  'You guessed too low!'
    };

    if (guessInput > number) {
        feedback.innerHTML = 'You guessed too high!'
}

   
})
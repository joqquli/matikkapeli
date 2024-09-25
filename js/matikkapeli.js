let firstNumber;
let secondNumber;
let correctCount = 0; 
let wrongCount = 0;   


function getRandomIntNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeNumbers() {
    firstNumber = getRandomIntNumberInRange(1, 10);
    secondNumber = getRandomIntNumberInRange(1, 10);

    const firstNumberElement = document.getElementById('first-number');
    const secondNumberElement = document.getElementById('second-number');

    if (firstNumberElement && secondNumberElement) {
        firstNumberElement.textContent = firstNumber;
        secondNumberElement.textContent = secondNumber;
    } else {
        console.error("Numeroiden elementtejä ei löytynyt!");
    }
}


function checkAnswer() {
    const userAnswerElement = document.getElementById('user-answer');
    if (userAnswerElement) {
        const userAnswer = parseInt(userAnswerElement.value); 
        const correctAnswer = firstNumber + secondNumber; 

        const resultMessageElement = document.getElementById('result-message');
        if (userAnswer === correctAnswer) {
            if (resultMessageElement) resultMessageElement.textContent = "Oikein!"; 
            correctCount++; 
        } else {
            if (resultMessageElement) resultMessageElement.textContent = `Väärin! Oikea vastaus oli ${correctAnswer}`; 
            wrongCount++; 
        }

        
        const correctAnswersElement = document.getElementById('correct-answers');
        const wrongAnswersElement = document.getElementById('wrong-answers');

        if (correctAnswersElement) correctAnswersElement.textContent = correctCount;
        if (wrongAnswersElement) wrongAnswersElement.textContent = wrongCount;

       
        userAnswerElement.value = '';
        randomizeNumbers();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Sivu ladattu');
    randomizeNumbers(); 

    const submitButton = document.getElementById('submit-answer');
    if (submitButton) {
        submitButton.addEventListener('click', checkAnswer);
    } else {
        console.error("Tarkista vastaus -painiketta ei löytynyt!");
    }
});

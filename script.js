const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

const questionTwo = document.querySelector('.q-two');
const answerTwo = document.querySelector('.a-two');

const questionThree = document.querySelector('.q-three');
const answerThree = document.querySelector('.a-three');

const questionFour = document.querySelector('.q-four');
const answerFour = document.querySelector('.a-four');

const questionFive = document.querySelector('.q-five');
const answerFive = document.querySelector('.a-five');

const colOne = document.querySelector('.col-one');
const colTwo = document.querySelector('.col-two');
const colThree = document.querySelector('.col-three');
const colFour = document.querySelector('.col-four');
const colFive = document.querySelector('.col-five');


const arrowIcon = document.querySelector('.arrowIcon');
const arrowIconTwo = document.querySelector('.icon-two');
const arrowIconThree = document.querySelector('.icon-three');
const arrowIconFour = document.querySelector('.icon-four');
const arrowIconFive = document.querySelector('.icon-five');

let count, countTwo, countThree, countFour, countFive = 0;

colOne.addEventListener('click', function () {
    if(count === 0) {
        question.classList.add('changeColor');
        answer.classList.add('showAnswer');
        arrowIcon.classList.add('arrowIconRotate');
        count = 1;
    } else {
        question.classList.remove('changeColor');
        answer.classList.remove('showAnswer');
        arrowIcon.classList.remove('arrowIconRotate');
        count = 0;
    } 
});

colTwo.addEventListener('click', function () {
    if(countTwo === 0) {
        questionTwo.classList.add('changeColor');
        answerTwo.classList.add('showAnswer');
        arrowIconTwo.classList.add('arrowIconRotate');
        countTwo = 1;
    } else {
        questionTwo.classList.remove('changeColor');
        answerTwo.classList.remove('showAnswer');
        arrowIconTwo.classList.remove('arrowIconRotate');
        countTwo = 0;
    }
});

colThree.addEventListener('click', function () {
    if(countThree === 0) {
        questionThree.classList.add('changeColor');
        answerThree.classList.add('showAnswer');
        arrowIconThree.classList.add('arrowIconRotate');
        countThree = 1;
    } else {
        questionThree.classList.remove('changeColor');
        answerThree.classList.remove('showAnswer');
        arrowIconThree.classList.remove('arrowIconRotate');
        countThree = 0;
    }
});

colFour.addEventListener('click', function () {
    if(countFour === 0) {
        questionFour.classList.add('changeColor');
        answerFour.classList.add('showAnswer');
        arrowIconFour.classList.add('arrowIconRotate');
        countFour = 1;
    } else {
        questionFour.classList.remove('changeColor');
        answerFour.classList.remove('showAnswer');
        arrowIconFour.classList.remove('arrowIconRotate');
        countFour = 0;
    }
});

colFive.addEventListener('click', function () {
    if(countFive === 0) {
        questionFive.classList.add('changeColor');
        answerFive.classList.add('showAnswer');
        arrowIconFive.classList.add('arrowIconRotate');
        countFive = 1;
    } else {
        questionFive.classList.remove('changeColor');
        answerFive.classList.remove('showAnswer');
        arrowIconFive.classList.remove('arrowIconRotate');
        countFive = 0;
    }
});
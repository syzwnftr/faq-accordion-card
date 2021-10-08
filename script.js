const questionArrow = document.querySelectorAll('.questionArrow');
const arrowIcon = document.querySelectorAll('.arrowIcon');
const question = document.querySelectorAll('.question');

let count = 0;



for (let i = 0; i < questionArrow.length; i++) {
  
    questionArrow[i].addEventListener('click', () => {
  
        const height = questionArrow[i].nextElementSibling.scrollHeight;

        if(count === 0) {
            questionArrow[i].nextElementSibling.style.maxHeight = `${height}px`;
            question[i].classList.add('bold');
            arrowIcon[i].classList.add('rotate');
            count = 1;
        } else {    
            questionArrow[i].nextElementSibling.style.maxHeight = '0px';
            question[i].classList.remove('bold');
            arrowIcon[i].classList.remove('rotate');
            count = 0;
        } 

    });
}

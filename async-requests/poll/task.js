const titel = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');


let xhr = new XMLHttpRequest();


xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let file = JSON.parse(xhr.responseText);
        titel.textContent = file.data.title;
        const answersVar = Array.from(file.data.answers);
        console.log(answersVar);
        for(let i = 0; i < answersVar.length; i++) {
            const answer = document.createElement('button');
            answer.classList.add('poll__answer');
            answers.insertAdjacentElement('afterbegin', answer);
            answer.textContent = answersVar[i];
            answer.addEventListener('click', (e) => {
                e.preventDefault();
                alert ('Спасибо, Ваш голос засчитан!');
            });
        };
    };
});

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

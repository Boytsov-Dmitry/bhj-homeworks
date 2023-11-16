const mainPart = document.querySelector('.card')
const cases = Array.from(document.querySelectorAll('.rotator__case'))
let i = 0;

setInterval(() => {
    if (i < cases.length) {
        mainPart + cases[i].classList.toggle('rotator__case_active');
        // mainPart + cases[i].classList.add('rotator__case_active');
        i++;
        mainPart + cases[i].classList.toggle('rotator__case_active');
    };
    
    if (i === cases.length) {
        mainPart + cases[0].classList.add('rotator__case_active');
        i = 0;
    };
}, 1000);

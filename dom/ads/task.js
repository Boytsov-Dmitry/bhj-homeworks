const mainPart = document.querySelector('.card')
const cases = Array.from(document.querySelectorAll('.rotator__case'))
let i = 0;

setInterval(() => {
    rotator()
}, 1000);

function rotator() {
    if (i < cases.length && i !== cases.length) {
        cases[i].classList.remove('rotator__case_active');
        i++;
        if (i === cases.length) {
            cases[0].classList.add('rotator__case_active');
            i = 0;
        };

        cases[i].classList.add('rotator__case_active');
    };
};






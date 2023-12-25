
const inputField = document.querySelector('.card')

inputField.querySelectorAll('textarea, input').forEach((e) => {
    if(e.value === '') {
        e.value = window.sessionStorage.getItem(e.name, e.value);
    };

    e.addEventListener('input', () => {
        window.sessionStorage.setItem(e.name, e.value);
    })
});

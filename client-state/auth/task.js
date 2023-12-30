const form = document.getElementById('signin__form')
const welcomeForm = document.querySelector('.welcome')
const welcomeId = document.getElementById('user_id')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';


    xhr.addEventListener('load', () => {
        if(xhr.response.success === true) {
            welcomeForm.classList.add('welcome_active');
            welcomeId.textContent = xhr.response.user_id;
        } else {
            alert('Неверный логин / пароль!');
        };
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
})



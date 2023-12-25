const form = document.getElementById('signin__form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    // xhr.upload.onprogress = function(event) {
    //     let a = event.loaded / event.total
    //     progress.value = a;
    // }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    // let formData = new FormData(form);
    xhr.send(formData)
})


// const name = 
// const password = 

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(form)
//     console.log(xhr.responseText)

//     document.cookie = `login=${formData.get('login')}`
//     document.cookie = `password=${formData.get('password')}`
// })



// let xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', () => {
//     if(xhr.readyState === xhr.DONE) {
//         let file = JSON.parse(xhr.responseText);
//         console.log(file)
//     };
// });

// xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
// xhr.send();
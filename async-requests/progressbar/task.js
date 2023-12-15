const progressPercent =  document.getElementById('progress')
// const formId = document.querySelector('form')
// console.log(formId)

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        let a = event.loaded / event.total
        progress.value = a;
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    const formData = new FormData(document.forms.form);
    xhr.send(formData)
})

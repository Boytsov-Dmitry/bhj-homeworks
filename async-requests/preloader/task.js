const loaderImage = document.querySelector('.loader');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loaderImage.classList.remove('loader_active')
        let data = JSON.parse(xhr.responseText)
        const item = document.getElementById('items')
        // console.log(data.response.Valute)
        Object.keys(data.response.Valute).forEach((e) => {
            item.innerHTML +=
            `<div class="item">
                <div class="item__code">
                    ${data.response.Valute[e].CharCode}
                </div>
                <div class="item__value">
                    ${data.response.Valute[e].Value}
                </div>
                <div class="item__currency">
                руб.
                </div>
            </div>`
        })
    };
});

let url = new URL('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.open('GET', url);
xhr.send();
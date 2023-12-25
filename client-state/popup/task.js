const popUp = document.querySelector('.modal');

popUp.classList.add('modal_active');

const closeKey = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
};

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(e => e.startsWith(name + '='));
    if(cookie !== undefined) {
        return cookie.substring(name.length + 1);
    }
};

const popUpResult = getCookie('popUpValue')

closeKey.addEventListener('click', () => {
    popUp.classList.remove('modal_active');
    document.cookie = 'popUpValue=closed'
});

if(popUpResult === 'closed') {
    popUp.classList.remove('modal_active');
};


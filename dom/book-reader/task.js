const bookSize = document.querySelector('.book')

const textSizes = Array.from(document.querySelectorAll('.font-size'));

textSizes.forEach ((element) => {
    element.onclick = () => {
        for(let i = 0; i < textSizes.length; i++) {
            textSizes[i].classList.remove('font-size_active');
        };

        element.classList.toggle('font-size_active');

        if (textSizes[0].classList.contains('font-size_active')){
            bookSize.classList.remove('book_fs-big');
            bookSize.classList.add('book_fs-small');
        };

        if (textSizes[1].classList.contains('font-size_active')){
            bookSize.classList.remove('book_fs-big');
            bookSize.classList.remove('book_fs-small');
        };

        if (textSizes[2].classList.contains('font-size_active')){
            bookSize.classList.remove('book_fs-small');
            bookSize.classList.toggle('book_fs-big');
        };

        return false;
    };
})

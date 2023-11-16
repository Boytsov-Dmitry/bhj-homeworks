const element = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    element.forEach((e) => {
        const { top, bottom } = e.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            e.classList.remove('reveal_active')
        } else {
            e.classList.add('reveal_active'); 
        };
    });
});


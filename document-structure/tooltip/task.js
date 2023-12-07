const tool = Array.from(document.querySelectorAll('.has-tooltip'));
const element = document.createElement('div')


tool.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();

        const elementPosition = elem.getBoundingClientRect();

        element.remove();

        element.innerText = elem.title;

        if(element.classList.contains('tooltip_active')) {
            element.classList.remove('tooltip_active');
        } else {
            element.classList.add('tooltip', 'tooltip_active');
        }

        element.setAttribute('style', `left: ${elementPosition.left}px`);
        elem.insertAdjacentElement('afterEnd', element);

    });
});


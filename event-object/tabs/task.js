const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'))


tab.forEach((element, index) => {
    element.onclick = () => {
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove('tab_active');
        };

        tab[index].classList.toggle('tab_active');
        
        indexOfTab = tab.indexOf(element);

        for (let j = 0; j < tabContent.length; j++) {
            tabContent[j].classList.remove('tab__content_active')
        };

        tabContent[indexOfTab].classList.toggle('tab__content_active');
    };
});


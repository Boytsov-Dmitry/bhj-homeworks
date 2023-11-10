const listButton = document.querySelector('.dropdown__value')
const list = document.querySelector('.dropdown__list')
const listOfItems = Array.from(document.querySelectorAll('.dropdown__item'))

listButton.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

listOfItems.forEach((element, i) => {
    element.onclick = () => {
     list.classList.remove('dropdown__list_active');
     listButton.textContent = listOfItems[i].textContent;
     return false;
    };

    // element.addEventListener('click', () => {
    //     list.classList.remove('dropdown__list_active');
    //     listButton.textContent = listOfItems[i].textContent;
    //     return false;
    //    });
});





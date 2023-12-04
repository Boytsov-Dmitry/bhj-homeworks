const form = document.querySelector('.tasks__control');
const inputField = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const taskMain = document.createElement('div');
const taskInside = document.createElement('div');
const taskDeleteLink = document.createElement('a');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputField.value !== '') {
        taskList.insertAdjacentElement('afterbegin', taskMain);
        taskMain.insertAdjacentElement('afterbegin', taskInside);
        taskInside.insertAdjacentElement('afterend', taskDeleteLink);
    
        taskMain.classList.add('task');
        taskInside.classList.add('task__title');
        taskDeleteLink.classList.add('task__remove');
        
        taskInside.textContent = inputField.value;
        taskDeleteLink.textContent = '×';

        if(taskList.children.length > 0) {
            taskList.appendChild(taskMain.cloneNode(true));
            taskList.firstChild.remove();
        }
    };

    inputField.value = '';

    const taskDeleteLinkList = Array.from(document.querySelectorAll('.task__remove'));

    taskDeleteLinkList.forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            element.parentElement.remove();
        });
    });
});


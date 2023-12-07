const form = document.querySelector('.tasks__control');
const inputField = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const taskMain = document.createElement('div');
const taskInside = document.createElement('div');
const taskDeleteLink = document.createElement('a');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputField.value.trim()) {
        taskList.insertAdjacentElement('afterbegin', taskMain);
        taskMain.insertAdjacentElement('afterbegin', taskInside);
        taskInside.insertAdjacentElement('afterend', taskDeleteLink);
    
        taskMain.classList.add('task');
        taskInside.classList.add('task__title');
        taskDeleteLink.classList.add('task__remove');
        
        taskInside.textContent = inputField.value;
        taskDeleteLink.textContent = '×';

        taskList.appendChild(taskMain.cloneNode(true));
        taskList.firstChild.remove();
        taskList.lastElementChild.querySelector('.task__remove').addEventListener('click', e => e.target.closest('.task').remove());
    };
  
    inputField.value = '';
});


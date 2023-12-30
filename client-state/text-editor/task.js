
const textArea = document.querySelector('textarea')

textArea.value = sessionStorage.getItem(textArea.name, textArea.value);
textArea.oninput = function(){
    sessionStorage.setItem(textArea.name, textArea.value);
};

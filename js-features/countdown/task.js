const timer = document.getElementById("timer");

const countDown = setInterval(() => {
    timer.textContent -= 1;

    if(Number(timer.textContent) === -1){
        alert('Вы победили в конкурсе!')
        clearInterval(countDown)
        timer.textContent = 0
    }
}, 1000)



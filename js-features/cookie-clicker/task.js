const clickCounter = document.getElementById("clicker__counter")
const cookieImg = document.getElementById("cookie")
const clickSpeed = document.getElementById("speedOfClick")

cookieImg.onclick = () => {
    clickCounter.textContent++;
    if(clickCounter.textContent % 2) {
        // date1 = new Date();
        // clickSpeed.textContent = date1.getSeconds()
        cookieImg.width = 250;
        // clickSpeed.textContent = date2 - date1;
    } else {
        // date2 = new Date();
        // clickSpeed.textContent = date2.getSeconds()
        cookieImg.width = 200;
        // clickSpeed.textContent = date2 - date1;
    };
    
}


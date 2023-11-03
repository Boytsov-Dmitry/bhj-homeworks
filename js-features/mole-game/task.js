const winPressKey = document.getElementById("dead")
const losePressKey = document.getElementById("lost")

getHole = index => document.getElementById(`hole${index}`)
for (holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.onclick = () => {
        if(hole.className.includes( 'hole_has-mole' )){
            winPressKey.textContent++
            if(Number(winPressKey.textContent) === 10){
                alert('Победа!');
                winPressKey.textContent = 0;
            };
        } else {
            losePressKey.textContent++
            if(Number(losePressKey.textContent) === 5){
                alert('Поражение!');
                losePressKey.textContent = 0;
            }
        };
    };
};

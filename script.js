let lastValue = "O"
let display = document.getElementById('display');
display.textContent ="Player 1's turn to play";
// get all buttons
let buttons = document.querySelectorAll('.box');
// console.log(buttons);

// set click listen on all buttons
for(let button of buttons){
button.addEventListener('click', () => {
    if(button.textContent !== "") {
        return
    };

    if (lastValue === "O") {
        button.textContent = "X";
        lastValue = "X";
        display.textContent = "Player 2's turn to play";
        checkGameStatus();
        checkDraw();
    } else {
        button.textContent = "O";
        lastValue = "O";
        display.textContent ="Player 1's turn to play";
        checkGameStatus();
        checkDraw();
    }
});
}


let controlBtn = document.getElementById('controlBtn');
controlBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})
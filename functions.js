function checker(first, second, third) {
    if(display.textContent.includes("won the game")) {
        return;
    }

    if(buttons[first].textContent === "X" &&
        buttons[second].textContent === "X" &&
        buttons[third].textContent === "X"){
            disableButtonsWhenGameIsWon("Player 1");
            return;
        } else if(buttons[first].textContent === "O" &&
            buttons[second].textContent === "O" &&
            buttons[third].textContent === "O"){
                disableButtonsWhenGameIsWon("Player 2");
                return;
            } else{
                checkDraw()
            }
}

function checkGameStatus(){
    checker(0, 1, 2);
    checker(3, 4, 5);
    checker(6, 7, 8);
    checker(0, 3, 6);
    checker(1, 4, 7);
    checker(2, 5, 8);
    checker(0, 4, 8);
    checker(2, 4, 6);
}

function disableButtonsWhenGameIsWon(player){
    for(let button of buttons) {
        if(button.textContent === ""){
            button.toggleAttribute('disabled')
        }
    }
    display.textContent = player + " won the game!";
}

function checkDraw() {

    for(let button of buttons){
        if(button.textContent === ""){
            return
        }
    }
    display.textContent = 'Draw';
}
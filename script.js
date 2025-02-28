let turn = document.querySelector('#turn_user').innerText;
let win_patern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

let btn_turn = document.querySelectorAll(".tic-tac-toe-button");
btn_turn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turn == "O") {
            btn.innerText = "O";
            btn.disabled = "True"
            check_winner()
            change_turn();
        } else {
            btn.innerText = "X";
            btn.disabled = "True"
            check_winner()
            change_turn();
        }
    })
})
function check_winner() {
    let isWinner = false;
    win_patern.forEach((win) => {
        if (btn_turn[win[0]].innerText == btn_turn[win[1]].innerText
            && btn_turn[win[1]].innerText == btn_turn[win[2]].innerText
            && btn_turn[win[0]].innerText != "") {
            disp_winner(btn_turn[win[0]]);
            Array.from(btn_turn).every(btn => btn.disabled = "True")
            isWinner = true;
        }
    })

    // Check for draw if no winner
    if (!isWinner && check_draw()) {
        disp_draw();
    }
}

// New function to check for draw
function check_draw() {
    return Array.from(btn_turn).every(btn => btn.innerText !== "");
}

// New function to display draw message
function disp_draw() {
    let winner_div = document.querySelector("#winner");
    winner_div.innerText = "It's a Draw!";
    document.getElementById('turn_div').remove();
}

function disp_winner(winner) {
    let winner_div = document.querySelector("#winner");
    winner_div.innerText = `Player ${winner.innerText} wins!`
    document.getElementById("turn_div").remove();
}

function change_turn() {
    if (turn == "O") {
        document.querySelector('#turn_user').innerText = "X";
        turn = "X";
    } else {
        document.querySelector('#turn_user').innerText = "O";
        turn = "O";
    }
}

// Declaring variables


const rollbtn = document.getElementById("roll");
const hold = document.getElementById("hold")
const start = document.getElementById("start")
const turn = document.getElementById("turn");
const dice = document.getElementById("dice");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const player1 = document.getElementById("player_1");
const player2 = document.getElementById("player_2");
const win_loose =document.getElementById("win_loose");

let rolled = 0;

let switchTurn = [{
    player: "Player 1",
    total_score: 0
},
{
    player: "Player 2",
    total_score: 0
}]


function winner(){
    if(switchTurn[0].total_score >= 21){
        win_loose.textContent = `${switchTurn[0].player} Won! `
        rollbtn.textContent = "Game End";
        turn.style.visibility = "hidden";
        
    }
}

// Rolled 1 - function

function rolled1(){
    win_loose.textContent =`${switchTurn[1].player} Won!`
    turn.style.visibility = "hidden";
    rollbtn.textContent = "Game End";
}

// Dice Rolled - function

function diceRolled(){
    let dice = [1,2,3,4,5,6];
    rolled = dice[Math.floor(Math.random()*6)];
}

// Update score - function

function updateScore(){
    if(switchTurn[0].player == "Player 1"){
        score1.textContent = switchTurn[0].total_score;
    }else{
        score2.textContent = switchTurn[0].total_score
    }
}

// hold - function

function holdTurn(){
    switchTurn.reverse()
    turn.textContent = switchTurn[0].player
}

// restart - function

function restart(){
    switchTurn[0].player = "Player 1";
    switchTurn[1].player = "Player 2"
    switchTurn[0].total_score = 0;
    switchTurn[1].total_score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    rollbtn.textContent = "Roll"
    win_loose.textContent = "Roll the dice"
    turn.style.visibility = "visible"
    turn.textContent = "Player 1";
}

rollbtn.addEventListener("click",()=>{
    if(rollbtn.textContent == "Game End"){
        alert("Start New Game")
    }else{
        diceRolled()
        dice.src = `images/dice${rolled}.png`;
        if (rolled == 1 && switchTurn[0].total_score == 0){
            switchTurn.reverse();
            turn.textContent = switchTurn[0].player;
        }else if(rolled == 1 && switchTurn[0].total_score != 0 ){
            rolled1();
        }else{
            switchTurn[0].total_score += rolled;
            updateScore();
            winner();
        }

    }

    })


hold.addEventListener("click",()=>{
    holdTurn()
})

start.addEventListener("click",()=>{
    restart();

})
// Declaring variables


const roll = document.getElementById("roll");
const turn = document.getElementById("turn");
const dice_1 = document.getElementById("dice_1");
const dice_2 = document.getElementById("dice_2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const player1_name = document.getElementById("player1_name");
const player2_name = document.getElementById("player2_name");
const win_loose =document.getElementById("win_loose");

// adding events

total_score1 = 0;
total_score2 = 0;

// Reset game - function

function reset(){
    roll.textContent = "Roll"
    score1.textContent = 0;
    score2.textContent = 0;
    total_score1 = 0;
    total_score2 = 0;
    turn.textContent = "Player 1"
    win_loose.textContent = "Start Game!"
    turn.style.visibility = "visible";
}

// Who is a winner - function

function winner(){
    if(total_score1 >= 21){
        win_loose.textContent = "Player 1 Won!";
        roll.textContent = "Reset";
        turn.style.visibility = "hidden";
    }else if(total_score2 >= 21){
        win_loose.textContent = "Player 2 Won!";
        roll.textContent = "Reset";
        turn.style.visibility = 'hidden';

    }else{
        win_loose.textContent = win_loose.textContent;
    }
}

// Whose turn - function

// function whoseTurn(){
//     if(turn.textContent == "Player 1"){
//         turn.textContent = "Player 2";
//     }else{
//         turn.textContent = "Player 1";
//     }
// }

// dice roll - function

function diceRoll(){
    let diceRoll = [1,2,3,4,5,6];
    let rolled = diceRoll[Math.floor(Math.random()*6)];
    return rolled;
}

// A player rolled 1 - function

function rolled1(){
    if(turn.textContent == "Player 1"){
        win_loose.textContent = "Player 2 Won because the other Player Rolled 1!";
        roll.textContent = "Reset";
        turn.style.visibility = 'hidden';
    }else{
        win_loose.textContent = "Player 1 Won because the other player Rolled 1!";
        roll.textContent = "Reset";
        turn.style.visibility = 'hidden';
    }


}

// Click roll(Button) - Event

roll.addEventListener("click",()=>{
    if(roll.textContent == "Reset"){
        reset();
    }else{  
            diceRolled = diceRoll();
            if(turn.textContent == "Player 1"){  
                dice_1.src =`images/dice${diceRolled}.png`;
                total_score1 += diceRolled;
                score1.textContent = total_score1;
                win_loose.textContent = `Player 1 Rolled ${diceRolled}`
                if(diceRolled !== 1){
                    // whoseTurn();
                    turn.textContent = "Player 2"
                    winner();
                }else{
                    rolled1();
                }    
            }else{
                dice_2.src =`images/dice${diceRolled}.png`;
                total_score2 += diceRolled;
                score2.textContent = total_score2;
                win_loose.textContent = `Player 2 Rolled ${diceRolled}`
                if(diceRolled !== 1){
                    // whoseTurn();
                    turn.textContent = "Player 1"
                    winner();
                }else{
                    rolled1();
                }    
            }
            
}})





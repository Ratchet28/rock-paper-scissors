


// Generate random answer from options for computer selection
const options = ["rock", "paper", "scissors"];

function computerPlay() {
    let rand = options[Math.floor(Math.random() * options.length)];
    return rand;
    
}
let playerSelect = "Rock";
let computerSelection = computerPlay();

// code to play once round
// switch player selction to lowercase
//compare playerSelection to computerSelection and return string to delclare winnner
function playRound(playerSelect,computerSelection) {

     playerSelect = playerSelect.toLowerCase();
    

    if (playerSelect === computerSelection) {
        return "You tied"

    } else if (playerSelect == "rock" && computerSelection == "scissors") {
        //userScore++;
        return "You won! Rock beats Scissors";

    } else if (playerSelect == "rock" && computerSelection == "paper"){
        //compScore++; 
        return "You lost! Paper beats rock";

    } else if (playerSelect == "scissors" && computerSelection == "paper") {
        //userScore++;
        return "You Won! Scissors beats Paper";

    }else if (playerSelect == "scissors" &&  computerSelection == "rock") {
        //compScore++
        return "You lost! Rock beat scissors";

    }else if (playerSelect == "paper" && computerSelection == "rock") {
        //userScore++;
        return "You won! Paper beats Rock";

    }else (playerSelect == "paper" && computerSelection == "scissors") ;{
        //compScore++;
        return "You Lost! Scissors beats Paper";
    }

}

//console.log(playRound(playerSelect,computerSelection));

// Game function plays 5 round and keeps score to report winner or looser at end
// If player wins give point to player else give point to computer
// If player points = computer points return tie game, else if player points greater than
//computer return winner else return looser

function game() {


    for(let i = 0; i < 5; i++) {
        playRound(playerSelect,computerSelection);
        console.log(playRound(playerSelect,computerSelection));
    }
}


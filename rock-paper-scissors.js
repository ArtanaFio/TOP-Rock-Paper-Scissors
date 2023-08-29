

// Setup for recording the score and playing five rounds---------------------------------------------------

let playerScore = 0;
let computerScore = 0;

function game() {
            
// Setup for the player's selection of rock, paper, scissors------------------------------------------------------

    const buttons = document.querySelectorAll('button');
    const roundNumber = document.getElementById('roundNumber');
    const main = document.querySelector('.main');
    const results = document.querySelector('.results');
    const score = document.getElementById('score');
    const win = document.getElementById('win');
    const player = document.getElementById('player');
    const randomNumber = Math.random();
    const computer = document.getElementById('computer');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    //const computerTimeout = setTimeout(, 5000);

    // I moved getComputerChoice() inside the forEach loop to keep things organized. Game functions the same.

    

    function getPlayerChoice(event) {
        let button = event.target;
        return button.id;
    }   

    for (let i = 1; i <=5; i++) {
        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
    
                roundNumber.textContent = "Round " + i; 
                roundNumber.style = 'border-bottom: 5px solid white;'
                console.log(roundNumber.textContent);

                const playerSelection = getPlayerChoice(event);
                player.textContent = "Player chose " + playerSelection;
                console.log(player.textContent);

                function getComputerChoice() {
                    let option;
                    if (randomNumber <= 0.35) {
                        let option = "rock";
                        return option;
                    } else if (randomNumber > 0.35 && randomNumber <= 0.65) {
                        let option = "paper";
                        return option;                   
                    } else if (randomNumber > 0.65) { 
                        let option = "scissors";
                        return option;
                    } else {
                        return "ERROR!";                     
                    }
                }
                const computerSelection = getComputerChoice();
                computer.textContent = "Computer selected " + computerSelection;
                console.log(computer.textContent);
    
                const roundScore = roundWinner(playerSelection, computerSelection);
    
                function roundWinner(playerSelection, computerSelection) {
                    if (playerSelection === computerSelection) {
                        return "IT'S A DRAW -- NO WINNER";
                    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
                        return "PLAYER WINS!";
                    } else {
                        return "COMPUTER WINS!";
                    }
                }

                win.style = 'background: aqua; border: 10px double navy';
                win.textContent = roundScore;
                console.log(roundScore);
    
                roundWinner();
    
                function countScore(roundScore) {
                    while (true) {
                        if (roundScore === "PLAYER WINS!") {
                            playerScore++;
                        } else if (roundScore === "COMPUTER WINS!") {
                            computerScore++;
                        } else {
                            break;
                        }
                    }
                    score.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
                }
    
                console.log(score.textContent);
                countScore();
    
                function startAgain() {
                    const playAgain = document.createElement('button');
                    playAgain.textContent = 'Play Again';
                    playAgain.style = 'background: royalblue; color: white; margin-top: 20px';
                    results.appendChild(playAgain);
    
                    playAgain.addEventListener('click', (event) => {
                        enableAllButtons();
                        roundNumber.textContent = '';
                        roundNumber.style = 'border-bottom: none';
                        player.textContent = '';
                        computer.textContent = '';
                        win.textContent = '';
                        win.style = 'background: navy; border: none';
                        playAgain.remove();
                    })
                }
    
                startAgain();
                
            });
        }); 
    
    }

    
    

    //-----------------------Disable Buttons after click-----------------------
    
    function disableAllButtons() {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    rock.addEventListener('click', () => {
        disableAllButtons();
    });

    paper.addEventListener('click', () => {
        disableAllButtons();
    });

    scissors.addEventListener('click', () => {
        disableAllButtons();
    });

    function enableAllButtons() {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }

    
    main.appendChild(player);
    main.appendChild(computer);
    results.appendChild(score);
    results.appendChild(win);
    
}

game();



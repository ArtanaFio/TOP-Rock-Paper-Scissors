

// Setup for recording the score and playing five rounds---------------------------------------------------

let playerScore = 0;
let computerScore = 0;

function game() {
            
// Setup for the player's selection of rock, paper, scissors------------------------------------------------------

    const buttons = document.querySelectorAll('button');
    const main = document.querySelector('.main');
    const results = document.querySelector('.results');
    const win = document.getElementById('win');
    const player = document.getElementById('player');
    const randomNumber = Math.random();
    const computer = document.getElementById('computer');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    
    const computerSelection = getComputerChoice();

    //const computerTimeout = setTimeout(, 5000);

    //-----------------------Computer Selection-----------------------

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
    
    //-----------------------Player Selection-----------------------

    function getPlayerChoice(event) {
        let button = event.target;
        return button.id;
    }   

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const playerSelection = getPlayerChoice(event);
            player.textContent = "Player chose " + playerSelection;
            computer.textContent = "Computer selected " + computerSelection;
            win.style = 'background: aqua; border: 10px double navy';

            function determineWinner() {
                if (playerSelection === computerSelection) {
                    win.textContent = "IT'S A DRAW -- NO WINNER";
                } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    win.textContent = "PLAYER WINS!";
                } else {
                    win.textContent = "COMPUTER WINS!";
                }
            }

            determineWinner();

            function startAgain() {
                const playAgain = document.createElement('button');
                playAgain.textContent = 'Play Again';
                results.appendChild(playAgain);

                playAgain.addEventListener('click', (event) => {
                    // Once you're able to clear the 'Play Again' button for each round, commit the success
                    enableAllButtons();

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
    results.appendChild(win);
}

game();



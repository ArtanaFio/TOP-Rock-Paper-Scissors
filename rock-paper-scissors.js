

// Setup for recording the score and playing five rounds---------------------------------------------------

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let numberRound = 0;
            
    // Setup for the player's selection of rock, paper, scissors------------------------------------------------------

    const buttons = document.querySelectorAll('button');
    const roundNumber = document.getElementById('roundNumber');
    const main = document.querySelector('.main');
    const results = document.querySelector('.results');
    const score = document.getElementById('score');
    const outcome = document.getElementById('outcome');
    const win = document.getElementById('win');
    const player = document.getElementById('player');
    const randomNumber = Math.random();
    const computer = document.getElementById('computer');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');


    //win.style = 'background: aqua; border: 10px double navy';


    

        function getPlayerChoice(event) {
            let button = event.target;
            return button.id;
        }   

        
            buttons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    numberRound++;
                    roundNumber.textContent = "Round " + numberRound; 
                    roundNumber.style = 'border-bottom: 5px solid white';
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
                    console.log(randomNumber);
                    computer.textContent = "Computer selected " + computerSelection;
                    console.log(computer.textContent);
        
                    const roundScore = roundWinner(playerSelection, computerSelection);
        
                    function roundWinner(playerSelection, computerSelection) {
                        if (playerSelection === computerSelection) {
                            return "No points";
                        } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
                            playerScore++;
                            return "Player wins the point";
                        } else {
                            computerScore++;
                            return "Computer wins the point";
                        }
                    }


                    results.style = "border-top: 5px solid white";
                    outcome.textContent = roundScore;
                    console.log(roundScore);

                    score.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
                    console.log(score.textContent);
        
                    roundWinner();
                    
                    function startAgain() {
                        const playAgain = document.createElement('button');
                        playAgain.textContent = 'Play Again';
                        playAgain.style = 'background: royalblue; color: white; width: 250px; margin-top: 20px';
                        main.appendChild(playAgain);
            
                        playAgain.addEventListener('click', (event) => {
                            enableAllButtons();
                            roundNumber.textContent = '';
                            roundNumber.style = 'border-bottom: none';
                            player.textContent = '';
                            computer.textContent = '';
                            outcome.textContent = '';
                            win.textContent = '';
                            playAgain.remove();
                        })
                    }
            
                    startAgain();
                    
                    function winner(playerScore, computerScore) {
                        if (playerScore === 5) {
                            win.textContent = "CONGRATULATIONS! YOU WIN!"
                            disableAllButtons();
                        } else if (computerScore === 5) {
                            win.textContent = "Sorry, Computer wins";
                            disableAllButtons();
                        }
                    }

                    winner();
                    
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
        main.appendChild(outcome);
        results.appendChild(score);
        results.appendChild(win);
    

}
game();
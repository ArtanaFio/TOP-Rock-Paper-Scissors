

// Setup for recording the score and playing five rounds---------------------------------------------------

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let numberRound = 0;

    //math.randomseed(tick()); this might help with the RandomNumber becuase currently it doesn't change
            
    // Setup for the player's selection of rock, paper, scissors------------------------------------------------------
    const selectMove = document.querySelector('.select-move');
    const buttons = document.querySelectorAll('.button-choice');
    const roundNumber = document.getElementById('roundNumber');
    const main = document.querySelector('.main');
    const results = document.querySelector('.results');
    const score = document.getElementById('score');
    const outcome = document.getElementById('outcome');
    const win = document.getElementById('win');
    const player = document.getElementById('player');
    
    const computer = document.getElementById('computer');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    

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
                        const randomNumber = Math.random();
                        console.log(randomNumber);
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
                    

                    function winner() {
                        if (playerScore === 5) {
                            win.style = 'background: aqua; border: 10px double navy';
                            win.textContent = "CONGRATULATIONS! YOU WIN!";
                            selectMove.textContent = '';
                            roundNumber.textContent = '';
                            roundNumber.style = 'border-bottom: none';
                            player.textContent = '';
                            computer.textContent = '';
                            outcome.textContent = '';
                            removeAllButtons();
                        } else if (computerScore === 5) {
                            win.style = 'background: aqua; border: 10px double navy';
                            win.textContent = "Sorry, Computer wins";
                            selectMove.textContent = '';
                            roundNumber.textContent = '';
                            roundNumber.style = 'border-bottom: none';
                            player.textContent = '';
                            computer.textContent = '';
                            outcome.textContent = '';
                            removeAllButtons();
                        }
                    }
        
                    winner();
        

                    function startRound() {
                        const nextRound = document.createElement('button');
                        nextRound.textContent = 'Start Next Round';
                        nextRound.style = 'background: royalblue; color: white; width: 350px; margin-top: 20px';
                        main.appendChild(nextRound);
            
                        nextRound.addEventListener('click', (event) => {
                            enableButtons();
                            roundNumber.textContent = '';
                            roundNumber.style = 'border-bottom: none';
                            player.textContent = '';
                            computer.textContent = '';
                            outcome.textContent = '';
                            win.textContent = '';
                            nextRound.remove();
                        })
                    }
            
                    startRound();

                    function removeAllButtons() {
                        rock.remove();
                        paper.remove();
                        scissors.remove();
                        nextRound.remove();
                    }
                    
                });
            }); 
        
        //-----------------------Disable Buttons after click-----------------------
        
        function disableButtons() {
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }

        rock.addEventListener('click', () => {
            disableButtons();
        });

        paper.addEventListener('click', () => {
            disableButtons();
        });

        scissors.addEventListener('click', () => {
            disableButtons();
        });

        function enableButtons() {
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


// Setup for recording the score and playing five rounds---------------------------------------------------

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let numberRound = 0;

    //math.randomseed(tick()); this might help with the RandomNumber becuase currently it doesn't change
            
    // Setup for the player's selection of rock, paper, scissors------------------------------------------------------
    const article = document.querySelector('article');
    const selectMove = document.querySelector('.select-move');
    const choices = document.querySelector('.choices');
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
                    removeOptions();
                    
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
                            player.style = "font-weight: bolder";
                            computer.style = "font-weight: lighter; opacity: 25%";
                            return "Player wins the point";
                        } else {
                            computerScore++;
                            player.style = "font-weight: lighter; opacity: 25%";
                            computer.style = "font-weight: bolder";
                            return "Computer wins the point";
                        }
                    }

                    results.style = "border-top: 5px solid white";
                    outcome.textContent = roundScore;
                    console.log(roundScore);

                    score.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
                    console.log(score.textContent);
        
                    roundWinner();
                    

                    
        

                    function startRound() {
                        const nextRound = document.createElement('button');
                        nextRound.textContent = 'Start Next Round';
                        nextRound.style = 'background: royalblue; color: white; width: 350px; margin-top: 20px';
                        main.appendChild(nextRound);
            
                        function removeAllButtons() {
                            rock.remove();
                            paper.remove();
                            scissors.remove();
                            nextRound.remove();
                        }

                        function winner() {
                            if (playerScore === 5) {
                                win.textContent = "CONGRATULATIONS! YOU WIN!";
                                win.style = 'background: aqua; border: 10px double navy; font-size: 72px';
                                selectMove.textContent = '';
                                roundNumber.textContent = '';
                                roundNumber.style = 'border-bottom: none';
                                player.textContent = '';
                                computer.textContent = '';
                                outcome.textContent = '';
                                removeAllButtons();
                                const playAgain = document.createElement('button');
                                playAgain.textContent = 'Play again?';
                                playAgain.style = 'background-color: aqua; color: navy; margin-top: 100px';
                                article.appendChild(playAgain);
                            } else if (computerScore === 5) {
                                win.textContent = "Sorry, Computer wins";
                                win.style = 'background: aqua; border: 10px double navy; font-size: 72px';
                                roundNumber.textContent = '';
                                roundNumber.style = 'border-bottom: none';
                                player.textContent = '';
                                computer.textContent = '';
                                outcome.textContent = '';
                                selectMove.remove();
                                removeAllButtons();
                                const playAgain = document.createElement('button');
                                playAgain.textContent = 'Play again?';
                                playAgain.style = 'background-color: aqua; color: navy; margin-top: 100px';
                                article.appendChild(playAgain);
                            }
                        }
            
                        winner();

                        nextRound.addEventListener('click', (event) => {
                            addOptions();
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
                    
                });
            }); 
        
        //-----------------------Disable Buttons after click-----------------------
        
        

        function removeOptions() {
            selectMove.remove();
            choices.remove();
        }

        function addOptions() {
            article.appendChild(selectMove);
            article.appendChild(choices);
        }

        

        
        main.appendChild(player);
        main.appendChild(computer);
        main.appendChild(outcome);
        results.appendChild(score);
        article.appendChild(win);
        

}
game();
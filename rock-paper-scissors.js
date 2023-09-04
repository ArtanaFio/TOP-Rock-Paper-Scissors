
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let numberRound = 0;
            

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
    const playAgain = document.getElementById('playAgain');

    playAgain.remove(); 

    function gameLoop() {

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
                            return "Player wins the point";
                        } else {
                            computerScore++;
                            return "Computer wins the point";
                        }
                    }

                    function roundStyle() {
                        if (roundScore === "No points") {
                            player.style = "font-weight: normal; opacity: 100%";
                            computer.style = "font-weight: normal; opacity: 100%";
                        } else if (roundScore === "Player wins the point") {
                            player.style = "font-weight: bolder";
                            computer.style = "font-weight: lighter; opacity: 45%";
                        } else {
                            player.style = "font-weight: lighter; opacity: 45%";
                            computer.style = "font-weight: bolder";}
                    }

                    results.style = "border-top: 5px solid white";
                    outcome.textContent = roundScore;
                    console.log(roundScore);

                    score.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
                    results.appendChild(score);
                    console.log(score.textContent);
        
                    roundWinner();
                    roundStyle();
                    

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
                                article.appendChild(win);
                                selectMove.textContent = '';
                                roundNumber.textContent = '';
                                roundNumber.style = 'border-bottom: none';
                                player.textContent = '';
                                computer.textContent = '';
                                outcome.textContent = '';
                                removeAllButtons();
                                playAgain.textContent = 'Play again?';
                                playAgain.style = 'background-color: aqua; color: navy; margin-top: 100px';
                                article.appendChild(playAgain);
                            } else if (computerScore === 5) {
                                win.textContent = "Sorry, Computer wins";
                                win.style = 'background: aqua; border: 10px double navy; font-size: 72px';
                                article.appendChild(win);
                                roundNumber.textContent = '';
                                roundNumber.style = 'border-bottom: none';
                                player.textContent = '';
                                computer.textContent = '';
                                outcome.textContent = '';
                                selectMove.remove();
                                removeAllButtons();
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

            function playGameAgain() {
                playAgain.addEventListener('click', () => {
                    playerScore = 0;
                    computerScore = 0;
                    numberRound = 0;
                    console.log("playerScore: " + playerScore + ", computerScore: " + computerScore + ", numberRound: " + numberRound);
                    win.remove();
                    playAgain.remove();
                    results.style = 'border: none';
                    score.remove();
                    article.appendChild(selectMove);
                    article.appendChild(choices);
                    choices.appendChild(rock);
                    choices.appendChild(paper);
                    choices.appendChild(scissors);
                }); // At this point the game works, but the score doesn't appear and "win" doesn't appear when someone wins
            }
            playGameAgain();
    } 
    gameLoop();
        
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
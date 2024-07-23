
function game() { // Need to update flex-opp div containing player and computer

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
    const startButton = document.getElementById('start');
    const flexbox1 = document.querySelector('#flex-opp1');
    const flexbox2 = document.querySelector('#flex-opp2');
    const flexbox3 = document.querySelector('#flex-opp3');

    function removeOptions() {
        selectMove.remove();
        choices.remove();
    }

    function addOptions() {
        article.appendChild(selectMove);
        article.appendChild(choices);
    }

    function gameLoop() {

        playAgain.remove();
        selectMove.remove();
        choices.remove();

        startButton.addEventListener('click', () => {
            startButton.remove();
            article.appendChild(selectMove);
            article.appendChild(choices);
            choices.appendChild(rock);
            choices.appendChild(paper);
            choices.appendChild(scissors);
        })

        
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
                    
                    function playerStyle () {
                        if (playerSelection === 'rock') {
                            flexbox2.style = 'background-image: url("Images/rock.jpg"); background-size: cover';
                        } else if (playerSelection === 'paper') {
                            flexbox2.style = 'background-image: url("Images/paper.jpg"); background-size: cover';
                        } else {
                            flexbox2.style = 'background-image: url("Images/scissors.jpg"); background-size: cover';
                        }
                    }
                    playerStyle();

                    function getComputerChoice() {
                        const randomNumber = Math.random();
                        console.log(randomNumber);
                        let option;
                        if (randomNumber <= 0.35) {
                            let option = "rock";
                            flexbox1.style = 'background-image: url("Images/rock.jpg"); background-size: 100%';
                            return option;
                        } else if (randomNumber > 0.35 && randomNumber <= 0.65) {
                            let option = "paper";
                            flexbox1.style = 'background-image: url("Images/paper.jpg"); background-size: 100%';
                            return option;                   
                        } else if (randomNumber > 0.65) { 
                            let option = "scissors";
                            flexbox1.style = 'background-image: url("Images/scissors.jpg"); background-size: 100%';
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
                            player.style = "font-weight: normal; background-color: white";
                            computer.style = "font-weight: normal; background-color: white";
                        } else if (roundScore === "Player wins the point") {
                            player.style = "font-size: 50px; box-shadow: 10px 10px 10px navy; font-weight: bolder; background-color: aqua";
                            computer.style = "font-weight: lighter; background-color: white";
                        } else {
                            player.style = "font-weight: lighter; background-color: white";
                            computer.style = "font-size: 50px; box-shadow: 10px 10px 10px navy; font-weight: bolder; background-color: aqua";}
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
                        nextRound.textContent = 'START NEXT ROUND';
                        nextRound.classList.add('play-round');
                        flexbox3.appendChild(nextRound);
            
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
                                roundNumber.textContent = '';
                                roundNumber.style = 'border-bottom: none';
                                player.textContent = '';
                                player.style = 'background-color: transparent';
                                computer.textContent = '';
                                computer.style = 'background-color: transparent';
                                outcome.textContent = '';
                                selectMove.remove();
                                removeAllButtons();
                                playAgain.style = 'padding: 10px; background-color: royalblue; color: white; margin-top: 100px';
                                article.appendChild(playAgain);
                                flexbox1.style = 'background-image: none';
                                flexbox2.style = 'background-image: none';
                            } else if (computerScore === 5) {
                                win.textContent = "Sorry, Computer wins";
                                win.style = 'background: aqua; border: 10px double navy; font-size: 72px';
                                article.appendChild(win);
                                roundNumber.textContent = '';
                                roundNumber.style = 'border-bottom: none';
                                player.textContent = '';
                                player.style = 'background-color: transparent';
                                computer.textContent = '';
                                computer.style = 'background-color: transparent';
                                outcome.textContent = '';
                                selectMove.remove();
                                removeAllButtons();
                                playAgain.style = 'padding: 10px; background-color: aqua; color: navy; margin-top: 100px';
                                article.appendChild(playAgain);
                                flexbox1.style = 'background-image: none';
                                flexbox2.style = 'background-image: none';
                            }
                        }
            
                        winner();

                        nextRound.addEventListener('click', (event) => {
                            addOptions();
                            flexbox1.style = 'background-image: none';
                            flexbox2.style = 'background-image: none';
                            player.style = 'background-color: transparent';
                            computer.style = 'background-color: transparent';
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
                    article.appendChild(startButton);
                });
            }
            playGameAgain();
    } 
    gameLoop();
        
    main.appendChild(flexbox1);
    flexbox1.appendChild(computer);
    flexbox2.appendChild(player);
    flexbox3.appendChild(outcome);
    results.appendChild(score);
    article.appendChild(win);
        

}
game();
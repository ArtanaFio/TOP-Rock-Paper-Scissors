

        // Setup for recording the score and playing five rounds---------------------------------------------------

        let playerScore = 0;
        let computerScore = 0;

        function game() {
            for(let i = 1; i <= 5; i++) { // This keeps the game running for five rounds
            
            // Setup for stating the round being played
            function Round() {
                return i;
            }
            alert("Playing ROUND: " + i);

            console.log("Round: " + Round());

            // Setup for the player's selection of rock, paper, scissors------------------------------------------------------
        
            let playerChoice;
        

            while (true) { // Instead of using a recursive soluntion involving the if condition as I tried before, I switched to an iterative approach to loop the prompt until the player chooses one of the correct options
                playerChoice = prompt("ROCK, PAPER, SCISSORS ---which do you choose?");
                const playerSelection = playerChoice.toLowerCase();
                if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                    break;
                }
                alert("Rock, paper, or scissors wasn't selected. Try again");
            }
            alert ("Player has selected " + (playerSelection = playerChoice.toLowerCase())); // I needed to redefine playerSelection because it was only defined in the while loop

            // The iterative approach allowed the code to record the correct value in console.log as oppose to the previous method

            console.log("playerSelection: " + playerSelection);

        
            // Setup for the computer's selection of rock, paper, scissors------------------------------------------------------

            const computerSelection = getComputerChoice();

            function getComputerChoice() {
                let option;
                const randomNumber = Math.random(); // Originally I defined this variable in the global scope, but decided to move it inside the local scope to avoid typing "randomNumber" inside the parentheses of "getComputerChoice()"

                if (randomNumber <= 0.35) {
                    let option = "rock";
                    return option;
                } else if (randomNumber > 0.35 && randomNumber <= 0.65) {
                    let option = "paper";
                    return option;
                } else if (randomNumber > 0.65) { //originally I did not include this condition and instead simply used "else", but it caused issues
                    let option = "scissors";
                    return option;
                } else {
                    return "ERROR!"; // I included this to highlight whenever something other than the above conditions would have been incorrected labeled "SCISSORS" if the above condition was still "else"
                }
            }
            alert("Computer selected " + computerSelection); // This is outside the function because I want an alert to notify the computerSelection

            console.log("computerSelection: " + computerSelection);

            // Setup for comparing selections to determine the outcome of the round------------------------------------------------

            const result = playRound(playerSelection, computerSelection);

            function playRound(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
                    return "It's a draw";
                } else if 
                    ((playerSelection === "rock" && computerSelection === "scissors") || 
                    (playerSelection === "paper" && computerSelection === "rock")|| 
                    (playerSelection === "scissors" && computerSelection === "paper")) {
                        return "Player wins the round!";
                    } else if 
                    ((playerSelection === "scissors" && computerSelection === "rock") || 
                    (playerSelection === "rock" && computerSelection === "paper") || 
                    (playerSelection === "paper" && computerSelection === "scissors")) {
                        return "Computer wins the round!";
                    } else {
                    return "ERROR: wrong comparison result"; // Since I've already defined a tie condition, I replaced this with an error message in case there is an error in the code somewhere
                }
            }  
        
            alert("This round's result is: " + result);

            console.log(result);
            
            // Setup for the score tracker----------------------------------------------------------------------

            while (true) {
                if (result === "Player wins the round!") {
                    playerScore++;
                    break;
                } else if (result === "Computer wins the round!") {
                    computerScore++;
                    break;
                } else {
                    alert("No round winner");
                    break;
                }
            }
            alert("Player: " + playerScore + " | Computer: " + computerScore);

            console.log("playerScore: " + playerScore + ", computerScore: " + computerScore);

            } // End of the for loop (five rounds)

            // I needed to move the winner() function, alert(winner()), and console.log(winner()) outside the loop so that it only runs at the end of all five rounds
            function winner() {
                if (playerScore > computerScore) {
                    return "CONGRATULATIONS! PLAYER WINS!";
                } else if (playerScore < computerScore) {
                    return "Computer wins the game.";
                } else {
                    return "Sorry, there is no winner.";
                }
            } 
            
            alert(winner());

            console.log(winner());

        } // End of the game() function

        console.log(game());
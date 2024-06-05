//JavaScript Code for Tic Tac Toe Project

var player = (function() {
    var dialogPlayer1Name = "P1";
    var dialogPlayer2Name = "CPU";
    var dialogMarker = "X";
    var dialogFirstMove = "player1";

    let dialog = document.querySelector('dialog');

    let settingsButton = document.querySelector('#settings');
    let saveButton = document.querySelector('#save-changes');
    let closeButton = document.querySelector('#close-settings');

    settingsButton.addEventListener('click', settingsDialog);
    saveButton.addEventListener('click', saveChangesDialog);
    closeButton.addEventListener('click', closeDialog);

    function settingsDialog() {
        dialog.showModal();
    }

    function saveChangesDialog() {
        let radioMarkers = document.querySelector('input[name = "markers"]:checked');
        let radioFirstMove = document.querySelector('input[name = "first-move"]:checked');

        dialogPlayer1Name = document.querySelector('#p1-name');
        dialogPlayer2Name = document.querySelector('#cpu-name');

        if (radioMarkers != null)
            {
                dialogMarker = radioMarkers.value;
            }
        if (radioFirstMove != null)
            {
                dialogFirstMove = radioFirstMove.value;
            }  
    }

    function closeDialog() {
        dialog.close();
    }

    function getPlayer1Marker() {
        if (dialogMarker != null)
            {
                return dialogMarker;
            }
    }

    function getPlayer2Marker() {
        if (dialogMarker == 'X' && dialogMarker != null)
            {
                return 'O';
            }
        else if (dialogMarker == 'O' && dialogMarker != null)
            {
                return 'X';
            }
        else
            {
                return 'O';
            }
    }

    function getFirstToMove () {
        if (dialogFirstMove != null)
            {
                console.log(dialogFirstMove);
                return dialogFirstMove;
            }
    }

    return {
        getPlayer1Marker: getPlayer1Marker,
        getPlayer2Marker: getPlayer2Marker,
        getFirstToMove: getFirstToMove
    }
})();

var gameBoard = (function() {
    var gameBoardArray = [];

    var playerOneScore = 0;
    var computerScore = 0;

    let startButton = document.querySelector('#start');
    let resetButton = document.querySelector('#reset');

    let markerSquares = document.querySelectorAll('.marker-spot');
    let scorePlayerMenu = document.querySelector('.p1-score > p');
    let scoreComputerMenu = document.querySelector('.p2-score > p');

    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    
    
    function startGame() {
        markerSquares.forEach((button) => {
            button.disabled = false;
        });
    }

    function setPlayerScore() {
        playerOneScore++;
    }

    function setComputerScore() {
        computerScore++;
    }

    function getPlayerScore() {
        return playerOneScore;
    }

    function getComputerScore() {
        return computerScore;
    }

    function resetGame() {
        markerSquares.forEach((button) => {
            button.textContent = "";
        });

        gameBoardArray.splice(0, gameBoardArray.length);

        markerSquares.forEach((button) => {
            button.disabled = true;
        })
    }

    function placePieceInArray (piece, position) {
        gameBoardArray[position] = piece;
    }

    function printDom () {
        for(let i = 0; i < gameBoardArray.length; i++)
            {
                switch(i)
                {
                    case 0:
                        document.querySelector('#top-left').textContent = gameBoardArray[0];
                        break;
                    case 1:
                        document.querySelector('#top-mid').textContent = gameBoardArray[1];
                        break;
                    case 2:
                        document.querySelector('#top-right').textContent = gameBoardArray[2];
                        break;
                    case 3:
                        document.querySelector('#mid-left').textContent = gameBoardArray[3];
                        break;
                    case 4:
                        document.querySelector('#mid-mid').textContent = gameBoardArray[4];
                        break;
                    case 5:
                        document.querySelector('#mid-right').textContent = gameBoardArray[5];
                        break;
                    case 6:
                        document.querySelector('#bottom-left').textContent = gameBoardArray[6];
                        break;
                    case 7:
                        document.querySelector('#bottom-mid').textContent = gameBoardArray[7];
                        break;
                    case 8:
                        document.querySelector('#bottom-right').textContent = gameBoardArray[8];
                        break;
                    default:
                        console.log("nothing happened");
                        break;
                }
            }
        
        scorePlayerMenu.textContent = "";
        scoreComputerMenu.textContent = "";

        for (let i = 0; i < getPlayerScore(); i++)
            {
                if (i == 5)
                    {
                        scorePlayerMenu.textContent = scorePlayerMenu.textContent + " ";
                    }

                scorePlayerMenu.textContent = scorePlayerMenu.textContent + "i";
            }
        for (let j = 0; j < getComputerScore(); j++)
            {
                if (j == 5)
                    {
                        scoreComputerMenu.textContent = scoreComputerMenu.textContent + " ";
                    }
                        
                scoreComputerMenu.textContent = scoreComputerMenu.textContent + "i";
            }
    }

    function getPosition (position) {
        return gameBoardArray[position];
    }

    function checkPosition (position) {
        if (gameBoardArray[position] == null)
            {
                return false;
            }
        else if (gameBoardArray[position] != null)
            {
                return true;
            }
    }

    function returnArrayLength() {
        let count = 0;

        for (let i = 0; i < gameBoardArray.length; i++)
            {
                if (gameBoardArray[i] != null)
                    {
                        count++;
                    }
            }
        return count;
    }

    return {
        setPlayerScore: setPlayerScore,
        setComputerScore: setComputerScore,
        getPlayerScore: getPlayerScore,
        getComputerScore: getComputerScore,
        checkPosition: checkPosition,
        placePieceInArray: placePieceInArray,
        getPosition: getPosition,
        printDom: printDom,
        returnArrayLength: returnArrayLength,
        resetGame: resetGame
    }
})();

var gameLogic = (function() {
    let markerSquares = document.querySelectorAll('.marker-spot');

    markerSquares.forEach((button) => {
        playGame(button);
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * 9);
    }
    
    function getUserInput(userInput) {
        if (gameBoard.checkPosition(userInput) == false)
            {
                gameBoard.placePieceInArray(player.getPlayer1Marker(), userInput);
            }
        else if (gameBoard.checkPosition(userInput) == true)
            {
                alert("That position has already been taken!");
            } 
    }

    function getComputerInput() {
        let computerInput = getRandomNumber();
        let i = true;

        while (i = true)
            {
                if (gameBoard.checkPosition(computerInput) == true)
                    {
                        computerInput = getRandomNumber();
                    }
                else
                    {
                        return computerInput;
                    }
            }
    }

    function winCondition() {
        if ((gameBoard.getPosition(0) == gameBoard.getPosition(1) && gameBoard.getPosition(0) == gameBoard.getPosition(2)) && gameBoard.getPosition(0) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(0))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(0))
                    {
                        return "player2";
                    }
            }

        else if ((gameBoard.getPosition(0) == gameBoard.getPosition(3) && gameBoard.getPosition(0) == gameBoard.getPosition(6)) && gameBoard.getPosition(0) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(0))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(0))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(0) == gameBoard.getPosition(4) && gameBoard.getPosition(0) == gameBoard.getPosition(8)) && gameBoard.getPosition(0) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(0))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(0))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(1) == gameBoard.getPosition(4) && gameBoard.getPosition(1) == gameBoard.getPosition(7)) && gameBoard.getPosition(1) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(1))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(1))
                    {
                        return "player2";
                    }
            }

        else if ((gameBoard.getPosition(2) == gameBoard.getPosition(4) && gameBoard.getPosition(2) == gameBoard.getPosition(6)) && gameBoard.getPosition(2) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(2))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(2))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(2) == gameBoard.getPosition(5) && gameBoard.getPosition(2) == gameBoard.getPosition(8)) && gameBoard.getPosition(2) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(2))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(2))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(3) == gameBoard.getPosition(4) && gameBoard.getPosition(3) == gameBoard.getPosition(5)) && gameBoard.getPosition(3) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(3))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(3))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(6) == gameBoard.getPosition(7) && gameBoard.getPosition(6) == gameBoard.getPosition(8)) && gameBoard.getPosition(6) != null)
            {
                if (player.getPlayer1Marker() == gameBoard.getPosition(6))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2Marker() == gameBoard.getPosition(6))
                    {
                        return "player2";
                    }
            }
    }

    function playerMovesFirst(button) {
        button.addEventListener('click', () => {
            switch (button.id) 
            {
                case 'top-left':
                    getUserInput("0")
                    break;
                case 'top-mid':
                    getUserInput("1");
                    break;
                case 'top-right':
                    getUserInput("2");
                    break;
                case 'mid-left':
                    getUserInput("3");
                    break;
                case 'mid-mid':
                    getUserInput("4");
                    break;
                case 'mid-right':
                    getUserInput("5");
                    break;
                case 'bottom-left':
                    getUserInput("6")
                    break;
                case 'bottom-mid':
                    getUserInput("7");
                    break;
                case 'bottom-right':
                    getUserInput("8");
                    break;
                default:
                    console.log("you clicked something that isn't a square");
                    break;
            }

            player.getFirstToMove()

            if (gameBoard.returnArrayLength() < 8)
                {
                    switch(getComputerInput())
                    {
                        case 0:
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 0);
                            break;
                        case 1: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 1);
                            break;
                        case 2: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 2);
                            break;
                        case 3: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 3);
                            break;
                        case 4: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 4);
                            break;
                        case 5: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 5);
                            break;
                        case 6: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 6);
                            break;
                        case 7: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 7);
                            break;
                        case 8: 
                            gameBoard.placePieceInArray(player.getPlayer2Marker(), 8);
                            break;
                        default:
                            console.log("the computer got a number outside of 0-8");
                            break;
                    }
                }

            if (winCondition() == 'player1')
                {
                    gameBoard.setPlayerScore();

                    gameBoard.printDom();
                    
                    markerSquares.forEach((button) => {
                        button.disabled = true;
                    });

                    setTimeout(function() {
                        alert("Player 1 wins!");
                    }, 200);                    
                }
            else if (winCondition() == 'player2')
                {
                    gameBoard.setComputerScore();

                    gameBoard.printDom();
                    
                    markerSquares.forEach((button) => {
                        button.disabled = true;
                    });

                    setTimeout(function() {
                        alert("Player 2 wins!");
                    }, 200);

                }
            else if (gameBoard.returnArrayLength() == 9)
                {
                    gameBoard.printDom();

                    markerSquares.forEach((button) => {
                        button.disabled = true;
                    });

                    setTimeout(function() {
                        alert("It's a tie!");
                    }, 200);
                }
            else
                {
                    gameBoard.printDom();
                }
        });
    }

    function playGame(button) {
        console.log(player.getFirstToMove());
        if (player.getFirstToMove() == "player1")
            {
                playerMovesFirst(button);
            }
        else 
            {
                console.log("cpu");
            }
    } 

    return {
        playGame: playGame
    }
})();
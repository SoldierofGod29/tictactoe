//JavaScript Code for Tic Tac Toe Project

var player = (function() {
    var player1 = "";
    var player2 = "";

    function setPlayers(userInput) {
        if (userInput == "X")
        {
            player1 = "X";
            player2 = "O";
        }
        else if (userInput == "O")
        {
            player1 = "O";
            player2 = "X";
        }
        else
        {
            userInput = prompt("X or O");
        }
    }

    function getPlayer1() {
        return player1;
    }

    function getPlayer2(){
        return player2;
    }

    return {
        getPlayer1: getPlayer1,
        getPlayer2: getPlayer2,
        setPlayers: setPlayers,
    }
})();

var gameBoard = (function() {
    var gameBoardArray = [];

    let startButton = document.querySelector('#start');
    let resetButton = document.querySelector('#reset');
    let settingsButton = document.querySelector('#settings');

    let markerSquares = document.querySelectorAll('.marker-spot');

    let dialog = document.querySelector('dialog');
    let closeButton = document.querySelector('#close-settings')

    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    settingsButton.addEventListener('click', settingsDialog);
    closeButton.addEventListener('click', closeDialog)
    
    function startGame() {
        markerSquares.forEach((button) => {
            button.disabled = false;
        });
    }

    function resetGame() {
        markerSquares.forEach((button) => {
            button.textContent = "";
        });

        gameBoardArray.splice(0, gameBoardArray.length)

        markerSquares.forEach((button) => {
            button.disabled = true;
        })
    }

    function settingsDialog() {
        dialog.showModal();
    }

    function closeDialog() {
        dialog.close();
    }

    function placePieceInArray (piece, position) {
        gameBoardArray[position] = piece;
    }

    function placePieceInDom (piece, element) {
        element.textContent = piece;
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

    function printArray() {
        let stringToPrint = "";

        for(let i = 0; i < 3; i++)
            {
                if (gameBoardArray[i] == null)
                    {
                        stringToPrint += "[]";
                    }
                else
                    {
                        stringToPrint += "["+gameBoardArray[i]+"]";
                    }  
            }
        console.log(stringToPrint);
        stringToPrint = "";
        for (let i = 3; i < 6; i++)
            {
                if (gameBoardArray[i] == null)
                    {
                        stringToPrint += "[]";
                    }
                else
                    {
                        stringToPrint += "["+gameBoardArray[i]+"]";
                    }  
            }
        console.log(stringToPrint);
        stringToPrint = "";
        for (let i = 6; i < 9; i++)
            {
                if (gameBoardArray[i] == null)
                    {
                        stringToPrint += "[]";
                    }
                else
                    {
                        stringToPrint += "["+gameBoardArray[i]+"]";
                    }  
            }
        console.log(stringToPrint);
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
        printArray: printArray,
        checkPosition: checkPosition,
        placePieceInArray: placePieceInArray,
        getPosition: getPosition,
        placePieceInDom: placePieceInDom,
        returnArrayLength: returnArrayLength
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
    
    function getUserInput(userInput, element) {
        if (gameBoard.checkPosition(userInput) == false)
            {
                gameBoard.placePieceInArray('X', userInput);
                gameBoard.placePieceInDom('X', element);
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
                if (player.getPlayer1() == gameBoard.getPosition(0))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(0))
                    {
                        return "player2";
                    }
            }

        else if ((gameBoard.getPosition(0) == gameBoard.getPosition(3) && gameBoard.getPosition(0) == gameBoard.getPosition(6)) && gameBoard.getPosition(0) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(0))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(0))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(0) == gameBoard.getPosition(4) && gameBoard.getPosition(0) == gameBoard.getPosition(8)) && gameBoard.getPosition(0) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(0))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(0))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(1) == gameBoard.getPosition(4) && gameBoard.getPosition(1) == gameBoard.getPosition(7)) && gameBoard.getPosition(1) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(1))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(1))
                    {
                        return "player2";
                    }
            }

        else if ((gameBoard.getPosition(2) == gameBoard.getPosition(4) && gameBoard.getPosition(2) == gameBoard.getPosition(6)) && gameBoard.getPosition(2) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(2))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(2))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(2) == gameBoard.getPosition(5) && gameBoard.getPosition(2) == gameBoard.getPosition(8)) && gameBoard.getPosition(2) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(2))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(2))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(3) == gameBoard.getPosition(4) && gameBoard.getPosition(3) == gameBoard.getPosition(5)) && gameBoard.getPosition(3) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(3))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(3))
                    {
                        return "player2";
                    }
            }
        else if ((gameBoard.getPosition(6) == gameBoard.getPosition(7) && gameBoard.getPosition(6) == gameBoard.getPosition(8)) && gameBoard.getPosition(6) != null)
            {
                if (player.getPlayer1() == gameBoard.getPosition(6))
                    {
                        return "player1";
                    }
                else if (player.getPlayer2() == gameBoard.getPosition(6))
                    {
                        return "player2";
                    }
            }
    }

    function playGame(button) {
        player.setPlayers('X');

        button.addEventListener('click', () => {
            switch (button.id) 
            {
                case 'top-left':
                    getUserInput("0", button)
                    break;
                case 'top-mid':
                    getUserInput("1", button);
                    break;
                case 'top-right':
                    getUserInput("2", button);
                    break;
                case 'mid-left':
                    getUserInput("3", button);
                    break;
                case 'mid-mid':
                    getUserInput("4", button);
                    break;
                case 'mid-right':
                    getUserInput("5", button);
                    break;
                case 'bottom-left':
                    getUserInput("6", button)
                    break;
                case 'bottom-mid':
                    getUserInput("7", button);
                    break;
                case 'bottom-right':
                    getUserInput("8", button);
                    break;
                default:
                    console.log("you clicked something that isn't a square");
                    break;
            }
            console.log(winCondition());
            if (winCondition() == 'player1')
                {
                    alert("Player 1 wins!");
                }
            else if (winCondition() == 'player2')
                {
                    alert("You Lost!");
                }

            console.log(gameBoard.returnArrayLength());
            if (gameBoard.returnArrayLength() < 8)
                {
                    let element = ""; 

                    switch(getComputerInput())
                    {
                        case 0:
                            element = document.querySelector('#top-left');
                            gameBoard.placePieceInArray('O', 0);
                            gameBoard.placePieceInDom('O', element);
                            break;
                        case 1: 
                            element = document.querySelector('#top-mid');
                            gameBoard.placePieceInArray('O', 1);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 2: 
                            element = document.querySelector('#top-right');
                            gameBoard.placePieceInArray('O', 2);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 3: 
                            element = document.querySelector('#mid-left');
                            gameBoard.placePieceInArray('O', 3);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 4: 
                            element = document.querySelector('#mid-mid');
                            gameBoard.placePieceInArray('O', 4);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 5: 
                            element = document.querySelector('#mid-right');
                            gameBoard.placePieceInArray('O', 5);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 6: 
                            element = document.querySelector('#bottom-left');
                            gameBoard.placePieceInArray('O', 6);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 7: 
                            element = document.querySelector('#bottom-mid');
                            gameBoard.placePieceInArray('O', 7);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        case 8: 
                            element = document.querySelector('#bottom-right');
                            gameBoard.placePieceInArray('O', 8);
                            gameBoard.placePieceInDom("O", element);
                            break;
                        default:
                            console.log("the computer got a number outside of 0-8");
                            break;
                    }
                }
            else if (gameBoard.returnArrayLength() == 9)
                {
                    alert("It's a tie!");
                    //gameBoard.resetGame();
                }
        });
    } 
})();
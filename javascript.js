//JavaScript Code for Tic Tac Toe Project

var player = (function() {
    var player1 = "";
    var player2 = "";

    function setPlayers() {
        let userInput = prompt("X or O")

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

    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    settingsButton.addEventListener('click', settingsDialog);
    
    function startGame() {
        markerSquares.forEach((button) => {
            button.disabled = false;
        });
    }

    function resetGame() {
        markerSquares.forEach((button) => {
            button.textContent = "";
        });
    }

    function settingsDialog() {
        dialog.showModal();
    }

    function placePieceInArray (piece, position) {
        gameBoardArray[position] = piece;
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

    return {
        printArray: printArray,
        checkPosition: checkPosition,
        placePieceInArray: placePieceInArray,
        getPosition: getPosition
    }
})();

var gameLogic = (function() {
    let markerSquares = document.querySelectorAll('.marker-spot');

    markerSquares.forEach((button) => {
        button.addEventListener('click', function() {
            switch (button.id) {
                case 'top-left':
                    console.log("0")
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
        });
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * 9);
    }
    
    function getUserInput(userInput) {
        if (gameBoard.checkPosition(userInput) == false)
            {
                gameBoard.placePieceInArray('', userInput)
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
})();
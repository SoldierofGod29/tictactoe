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
    
    function placePieceInArray (piece, position) {
        gameBoardArray[position] = piece;
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
    }
})();

var gameLogic = (function() {

    
})();
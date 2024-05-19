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

    function getRandomNumber() {
        return Math.floor(Math.random() * 9);
    }
    
    function getUserInput() {
        let userInput = prompt("Choose a position 0-8");
        
        if (gameBoard.checkPosition(userInput) == false)
            {
                return userInput;
            }
        else if (gameBoard.checkPosition(userInput) == true)
            {
                alert("Position "+userInput+" has already been taken!");
                userInput = prompt("Choose a position 0-8");
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

    function playGame() {
        player.setPlayers();
        let i = 0;
         while(i < 5)
            {
                gameBoard.placePieceInArray(player.getPlayer1(), getUserInput());
                if (i != 4)
                    {
                        gameBoard.placePieceInArray(player.getPlayer2(), getComputerInput());
                    }
                

                gameBoard.printArray();
                console.log("-----------------");

                if (winCondition() == "player1")
                    {
                        console.log("Player 1 wins!");
                        break;
                    }
                else if (winCondition() == "player2")
                    {
                        console.log("Player 2 wins!");
                        break;
                    }

                console.log(i);
                if (i == 4)
                    {
                        if (winCondition() == "player1")
                            {
                                console.log("Player 1 wins!");
                                break;
                            }
                        else if (winCondition() == "player2")
                            {
                                console.log("Player 2 wins!");
                                break;
                            }
                        else 
                            {
                                console.log("It's a tie");
                                break;
                            }
                    }
                
                        
                i++;
            }
    }

    return {
        playGame: playGame,
    }
})();

gameLogic.playGame();
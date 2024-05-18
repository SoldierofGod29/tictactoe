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
})()

var gameBoard = (function() {
    var gameBoardArray = [];
    
});

var gameLogic = (function() {

});

player.setPlayers();
console.log(player.getPlayer1());
console.log(player.getPlayer2());
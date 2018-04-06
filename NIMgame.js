console.log('Welcome to a game of NIM!');

// Defining State
    // How many rocks?
    // Who's turn?
    
var numberOfRocks = 16;
var isPlayerOnesTurn = false;


// Actions 
    // 1 - Print the pile of rocks
    // 2 - Check if game is in progress/remaining rocks
    // 3 - Prompt for user input for rocks
    // 4 - Remove dots from the pile using user input 
    // 5 - Switch between players 

function printBoard() {

    var rock = "*";
    var numberOfRocksInPile = Math.max(numberOfRocks, 0);
    
    console.log(rock.repeat(numberOfRocksInPile));
}

// Checking for the board! 
// printBoard();

function isGameInProgress() {
    if (numberOfRocks > 0) {
        return true;
    } else {
        return false;
    }
}

function promptUserForRocks() {
    var userInput = parseInt(prompt("Enter a number between 1 and 3"));
    
    while ( userInput != 1 && userInput != 2 && userInput != 3 ) {
        userInput = parseInt(prompt("Enter a number between 1 and 3"));
    }
    return userInput; 
}

function removeRocks(rocksToRemove) {
    numberOfRocks -= rocksToRemove;
}

function switchPlayers() {
    isPlayerOnesTurn = !isPlayerOnesTurn;
}

// Kick game off!

printBoard();

while ( isGameInProgress() ) {
    switchPlayers();
    var rocksToRemove = promptUserForRocks();
    removeRocks(rocksToRemove);
    printBoard();
}

// Alert for winner! 

if (isPlayerOnesTurn) { 
    alert('Game over! Player one wins!');
} else {
    alert('Game over! Computer wins!');
}


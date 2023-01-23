// Nodelist with buttons
const btn = document.querySelectorAll('input'); 

// List of moves available (free tiles)
let availableMoves = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3'];

// Declares individual input elements for playing game
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

// Assign paragraph element variable for status of the game 
let p = document.getElementById("status");

// Listener for all buttons
btn.forEach((select) => {
    select.addEventListener('click', (e) => {
        if (availableMoves.includes(e.target.id)) {
        playerOneInput = e.target.id;
        availableMoves = stripMove(availableMoves, e.target.id);      
        
        // Assigns class to player's move for CSS styling purposes
        cross = e.target.classList;
        cross.add("cross");

        // Calls functions that checks conditions of game for each button press
        playerDraw();
        playerWin();
        generateComputerMove(availableMoves);
        playerLose();

        }
    })
});

// Function to let the computer pick a move from the array
function generateComputerMove(array) {

    // Generates random number within range of available moves
    let moveIndex = Math.floor(Math.random() * array.length);
    let moveId = array[moveIndex];
    let movePlay = document.getElementById(moveId);
    availableMoves = stripMove(array, moveId);

    // Assigns class to computer's move for CSS styling purposes
    circle = movePlay.classList;
    circle.add("circle");
}

// Function to remove the used slots from the available moves array
function stripMove(array, move) {
    let newAvailable = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] == move) {
            continue;
        }
        else {
            newAvailable.push(array[i]);
        }
    }
    return newAvailable;
}

// Function for player win conditions
function playerWin() {

    // Top row complete
    if ((a1.className == 'cross') && (b1.className == 'cross') && (c1.className == 'cross')) {

        a1.classList.add("win");
        b1.classList.add("win");
        c1.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];

    }

    // Middle row complete
    else if ((a2.className == 'cross') && (b2.className == 'cross') && (c2.className == 'cross')) {

        a2.classList.add("win");
        b2.classList.add("win");
        c2.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }

    // Bottom row complete
    else if ((a3.className == 'cross') && (b3.className == 'cross') && (c3.className == 'cross')) {

        a3.classList.add("win");
        b3.classList.add("win");
        c3.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }

    // First column complete
    else if ((a1.className == 'cross') && (a2.className == 'cross') && (a3.className == 'cross')) {

        a1.classList.add("win");
        a2.classList.add("win");
        a3.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }

    // Second column complete
    else if ((b1.className == 'cross') && (b2.className == 'cross') && (b3.className == 'cross')) {

        b1.classList.add("win");
        b2.classList.add("win");
        b3.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }
    
    // Third column complete
    else if ((c1.className == 'cross') && (c2.className == 'cross') && (c3.className == 'cross')) {

        c1.classList.add("win");
        c2.classList.add("win");
        c3.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }
    
    // Diagonal top-left to bottom-right complete
    else if ((a1.className == 'cross') && (b2.className == 'cross') && (c3.className == 'cross')) {

        a1.classList.add("win");
        b2.classList.add("win");
        c3.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }
    
    // Diagonal bottom-left to top-right complete
    else if ((c1.className == 'cross') && (b2.className == 'cross') && (a3.className == 'cross')) {

        c1.classList.add("win");
        b2.classList.add("win");
        a3.classList.add("win");
        p.innerHTML = "You win!";
        availableMoves = [];
    }

}

// Function for player losing conditions
function playerLose() {

    //  Top row complete
    if ((a1.className == 'circle') && (b1.className == 'circle') && (c1.className == 'circle')) {

        a1.classList.add("lose");
        b1.classList.add("lose");
        c1.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }

    // Middle row complete
    else if ((a2.className == 'circle') && (b2.className == 'circle') && (c2.className == 'circle')) {

        a2.classList.add("lose");
        b2.classList.add("lose");
        c2.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }

    // Bottom row complete
    else if ((a3.className == 'circle') && (b3.className == 'circle') && (c3.className == 'circle')) {

        a3.classList.add("lose");
        b3.classList.add("lose");
        c3.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }

    // First column complete
    else if ((a1.className == 'circle') && (a2.className == 'circle') && (a3.className == 'circle')) {

        a1.classList.add("lose");
        a2.classList.add("lose");
        a3.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }

    // Second column complete
    else if ((b1.className == 'circle') && (b2.className == 'circle') && (b3.className == 'circle')) {

        b1.classList.add("lose");
        b2.classList.add("lose");
        b3.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }
    
    // Third column complete
    else if ((c1.className == 'circle') && (c2.className == 'circle') && (c3.className == 'circle')) {

        c1.classList.add("lose");
        c2.classList.add("lose");
        c3.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }
    
    // Diagonal top-left to bottom-right complete
    else if ((a1.className == 'circle') && (b2.className == 'circle') && (c3.className == 'circle')) {

        a1.classList.add("lose");
        b2.classList.add("lose");
        c3.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }
    
    // Diagonal bottom-left to top-right complete
    else if ((c1.className == 'circle') && (b2.className == 'circle') && (a3.className == 'circle')) {

        c1.classList.add("lose");
        b2.classList.add("lose");
        a3.classList.add("lose");
        p.innerHTML = "You lose...";
        availableMoves = [];
    }
}

// Function when no win or lose conditions are met and there are no available moves
function playerDraw() {
    if (availableMoves.length == 0) {
        p.innerHTML = "DRAW!";
    }
}
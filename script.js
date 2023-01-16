//nodelist with buttons
const btn = document.querySelectorAll('input'); 

// list of moves available (free tiles)
let availableMoves = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3'];

// Declares 
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");


//Listener for all buttons
btn.forEach((select) => {
    select.addEventListener('click', (e) => {
        if (availableMoves.includes(e.target.id)) {
        playerOneInput = e.target.id;
        console.log(playerOneInput);
        availableMoves = stripMove(availableMoves, e.target.id);  
        console.log(availableMoves);      
        e.target.value = 'X';          
        generateComputerMove(availableMoves);
        rowComplete();
        }
    })
});

//function to let the computer pick a move from the array
function generateComputerMove(array) {
   let moveIndex = Math.floor(Math.random() * array.length);
   console.log(moveIndex);
   let moveId = array[moveIndex];
   console.log(moveId);
   document.getElementById(moveId).value = "O";
   availableMoves = stripMove(array, moveId);
   console.log(availableMoves);
}

//function to remove the used slots from the available moves array
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

//function for establishing 3-in-a-row
function rowComplete() {

    //Top row complete
    if ((a1.value == 'X') && (b1.value == 'X') && (c1.value == 'X')) {
        console.log("Top row complete!");
    }

    //Middle row complete
    else if ((a2.value == 'X') && (b2.value == 'X') && (c2.value == 'X')) {
        console.log("Middle row complete!");
    }

    //Bottom row complete
    else if ((a3.value == 'X') && (b3.value == 'X') && (c3.value == 'X')) {
        console.log("Bottom row complete!");
    }

    //First column complete
    else if ((a1.value == 'X') && (a2.value == 'X') && (a3.value == 'X')) {
        console.log("First column complete!");
    }

    //Second column complete
    else if ((b1.value == 'X') && (b2.value == 'X') && (b3.value == 'X')) {
        console.log("Second column complete!");
    }
    
    //Third column complete
    else if ((c1.value == 'X') && (c2.value == 'X') && (c3.value == 'X')) {
        console.log("Third column complete!");
    }
    
    //Diagonal top-left to bottom-right complete
    else if ((a1.value == 'X') && (b2.value == 'X') && (c3.value == 'X')) {
        console.log("Top-left to bottom-right complete!");
    }
    
    //Diagonal bottom-left to top-right complete
    else if ((c1.value == 'X') && (b2.value == 'X') && (a3.value == 'X')) {
        console.log("Bottom-left to top-right complete!");
    }

}
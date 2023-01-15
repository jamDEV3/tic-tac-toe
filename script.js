//nodelist with buttons
const btn = document.querySelectorAll('input'); 

// list of moves available (free tiles)
let availableMoves = ['a1', 'b1', 'c1','a2','b2','c2', 'a3', 'b3', 'c3'];

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
        }
    })
});

//function to let the computer pick a move from the array
function generateComputerMove(array) {
   let moveIndex = Math.floor(Math.random() * array.length-1);
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
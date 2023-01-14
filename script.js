//nodelist with buttons
const btn = document.querySelectorAll('input'); 

// Declaring variables to identify cells and generate computer's move
let chars = ["a", "b", "c"];

//arrays for each row of the grid
let gridRow1 = [a1, b1, c1];
let gridRow2 = [a2, b2, c2];
let gridRow3 = [a3, b3, c3];
//array for the grid
let gameGrid =[gridRow1, gridRow2, gridRow3];

//Listener for all buttons
btn.forEach((select) => {
    select.addEventListener('click', (e) => {
        playerOneInput = e.target.id;
        e.target.value = 'X';
        generateComputerMove();
    })
});


function generateComputerMove() {

    let randomNum = Math.floor(Math.random() * 3) + 1;
    let randomChar = chars[(Math.floor(Math.random() * 3))];

    let tile = randomChar + randomNum;

    console.log(tile);

    if (tile == "a1" && document.getElementById("a1").value == " ") {
        document.getElementById("a1").value = "O";
    }

    else if (tile == "a2" && document.getElementById("a2").value == " ") {
        document.getElementById("a2").value = "O";
    }
    
    else if (tile == "a3" && document.getElementById("a3").value == " ") {
        document.getElementById("a3").value = "O";
    }
    
    else if (tile == "b1" && document.getElementById("b1").value == " ") {
        document.getElementById("b1").value = "O";
    }

    else if (tile == "b2" && document.getElementById("b2").value == " ") {
        document.getElementById("b2").value = "O";
    }

    else if (tile == "b3" && document.getElementById("b3").value == " ") {
        document.getElementById("b3").value = "O";
    }

    else if (tile == "c1" && document.getElementById("c1").value == " ") {
        document.getElementById("c1").value = "O";
    }

    else if (tile == "c2" && document.getElementById("c2").value == " ") {
        document.getElementById("c2").value = "O";
    }

    else if (tile == "c3" && document.getElementById("c3").value == " ") {
        document.getElementById("c3").value = "O";
    }

};
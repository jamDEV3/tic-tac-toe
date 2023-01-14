//nodelist with buttons
const btn = document.querySelectorAll('input'); 

// Declaring chars to identify cells
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
        if (e.target.value == " ") {
        playerOneInput = e.target.id;
        e.target.value = 'X';
        let tile = generateRandom();
        while (true) {
        if (tile == e.target.id) {
            tile = generateRandom();
        }
        else {
            break;
        }}
        generateComputerMove(tile);
        }
    })
});


function generateComputerMove(num) {

    //Conditions for computer's move
    if (num == "a1" && document.getElementById("a1").value == " ") {
        document.getElementById("a1").value = "O";
    }
    else if (num == "a2" && document.getElementById("a2").value == " ") {
        document.getElementById("a2").value = "O";
    }    
    else if (num == "a3" && document.getElementById("a3").value == " ") {
        document.getElementById("a3").value = "O";
    }    
    else if (num == "b1" && document.getElementById("b1").value == " ") {
        document.getElementById("b1").value = "O";
    }
    else if (num == "b2" && document.getElementById("b2").value == " ") {
        document.getElementById("b2").value = "O";
    }
    else if (num == "b3" && document.getElementById("b3").value == " ") {
        document.getElementById("b3").value = "O";
    }
    else if (num == "c1" && document.getElementById("c1").value == " ") {
        document.getElementById("c1").value = "O";
    }
    else if (num == "c2" && document.getElementById("c2").value == " ") {
        document.getElementById("c2").value = "O";
    }
    else if (num == "c3" && document.getElementById("c3").value == " ") {
        document.getElementById("c3").value = "O";
    }
};

function generateRandom() {    
    // Declaring random numbers for computer gen
    let randomNum = Math.floor(Math.random() * 3) + 1; //Generates numbers 1 to 3
    let randomChar = chars[(Math.floor(Math.random() * 3))]; //Generates random letter from chars array
    // Generates random computer answer - e.g. a3
    let tile = randomChar + randomNum;
    console.log(tile);
    return tile;

}
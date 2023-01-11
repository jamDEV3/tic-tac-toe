const btn = document.querySelectorAll('input');

let playerOneInput;

//Listener for all buttons
btn.forEach((select) => {
    select.addEventListener('click', (e) => {
        playerOneInput = e.target.id;
        e.target.value = 'X';
    })
});
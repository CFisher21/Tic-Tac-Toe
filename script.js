const playerUI = document.getElementById('player'); 

let currentPlayer = 'X'; 


function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    document.getElementById('currentPlayer').textContent = currentPlayer; 
}

const gameplaces = document.querySelectorAll('.gameplace');

gameplaces.forEach(gameplace => {
    gameplace.addEventListener('click', function(event) {
        const span = gameplace.querySelector('.xo');

        if (!span.textContent) {
            span.textContent = currentPlayer;
            switchPlayer();
        }
        
    })
})






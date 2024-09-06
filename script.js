let currentPlayer = 'X'; 
let player1;
let player2;

function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    document.getElementById('currentPlayer').textContent = currentPlayer; 
    console.log('Outside:', player1, player2)
    if(currentPlayer === "X") {
        document.getElementById('playerName').textContent = player1
        console.log('Inside:', player1, player2)
    } else {
        document.getElementById('playerName').textContent = player2
    }
    
}

const gameplaces = document.querySelectorAll('.gameplace');

gameplaces.forEach(gameplace => {
    gameplace.addEventListener('click', function(event) {
        const span = gameplace.querySelector('.xo');

        if (!span.textContent) {
            span.textContent = currentPlayer;
            
            const winner = checkWin();
            if(winner) {
                setTimeout(() =>{
                    alert(`Player ${winner} wins!`)
                }, 200);
                return
            }

            switchPlayer();
        }
        
    })
})

function checkWin() {
    const winningCombinations = [
        // Rows
        ['row1-col1', 'row1-col2', 'row1-col3'],
        ['row2-col1', 'row2-col2', 'row2-col3'],
        ['row3-col1', 'row3-col2', 'row3-col3'],
        // Columns
        ['row1-col1', 'row2-col1', 'row3-col1'],
        ['row1-col2', 'row2-col2', 'row3-col2'],
        ['row1-col3', 'row2-col3', 'row3-col3'],
        // Diagonals
        ['row1-col1', 'row2-col2', 'row3-col3'],
        ['row1-col3', 'row2-col2', 'row3-col1']
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        console.log(a)
        const spanA = document.getElementById(a).textContent;
        const spanB = document.getElementById(b).textContent;
        const spanC = document.getElementById(c).textContent;
  
        if (spanA && spanA === spanB && spanA === spanC) {
          return spanA;  // Return 'X' or 'O' if there's a winner
        }
      }
        return null
}

const start = document.getElementById('start');
const gameboard = document.getElementById('gameboard');

start.addEventListener('click', () => {

    
    
    gameboard.classList.toggle('active');

    player1 = prompt('Player 1 Name: ')
    player2 = prompt('Player 2 Name: ')

   

    if(player1 != null && player2 != null) {
        document.getElementById('playerName').textContent = player1
        return player1, player2
    }

})






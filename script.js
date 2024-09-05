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






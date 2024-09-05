function gameboard() {
    const board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]

    function displayBoard() {
        board.forEach(row => {
            console.log(row.join(' | '));
        })
    }

    function makeMove(row, col, player) {
        if (board[row][col] === '') {
          board[row][col] = player;
          return true;
        } else {
          console.log('Cell is already occupied!');
          return false;
        }
      }

      function checkWin() {
        // Check rows
        for (let row of board) {
          if (row[0] && row[0] === row[1] && row[1] === row[2]) {
            return row[0];
          }
        }
    
        // Check columns
        for (let col = 0; col < 3; col++) {
          if (board[0][col] && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return board[0][col];
          }
        }
    
        // Check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
          return board[0][0];
        }
    
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
          return board[0][2];
        }
    
        // No winner
        return null;
      }
    
    return{board, displayBoard, makeMove, checkWin}
}

const game = gameboard(); 
game.makeMove(0, 0, 'X');
game.makeMove(1, 1, "X")
game.makeMove(2, 2, "X")
game.displayBoard();
const winner = game.checkWin();
if (winner) {
  console.log(`Player ${winner} wins!`);
} else {
  console.log('No winner yet.');
}


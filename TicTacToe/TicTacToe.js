const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let turn = 'x';
let gameOver = false;

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // columns
  [0,4,8],[2,4,6]          // diagonals
];

function checkWin(player) {
  return winCombos.some(combo => combo.every(index => cells[index].classList.contains(player)));
}

function checkDraw() {
  return [...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'));
}

function handleClick(e) {
  const cell = e.target;
  if (cell.classList.contains('x') || cell.classList.contains('o') || gameOver) return;

  cell.classList.add(turn);
  cell.textContent = turn.toUpperCase();

  if (checkWin(turn)) {
    message.textContent = `${turn.toUpperCase()} wins! 🎉`;
    gameOver = true;
  } else if (checkDraw()) {
    message.textContent = "It's a draw!";
    gameOver = true;
  } else {
    turn = turn === 'x' ? 'o' : 'x';
    message.textContent = `Turn: ${turn.toUpperCase()}`;
  }
}

function resetGame() {
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.textContent = '';
  });
  turn = 'x';
  gameOver = false;
  message.textContent = `Turn: ${turn.toUpperCase()}`;
}

// Add click event listeners
cells.forEach(cell => cell.addEventListener('click', handleClick));

// Initialize message
message.textContent = `Turn: ${turn.toUpperCase()}`;

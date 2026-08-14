const board = document.getElementById('chess-board');
const boardGrid = [];

for (let row = 0; row < 8; row++) {
	boardGrid[row] = [];
    for (let col = 0; col < 8; col++) {
		const square = document.createElement('div');
		square.className = 'square';
		square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');

		square.addEventListener('click', () => {
			clickedX = row;
			clickedY = col;

            console.log(`Clicked square at row: ${row}, col: ${col}`);

		});

		boardGrid[row][col] = square;
		board.appendChild(square);
    }
}
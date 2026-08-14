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

class Piece {
	constructor(row, col, color, img, type) {
		this.row = row;
		this.col = col;
		this.color = color;
		this.img = img;
		this.type = type;

		this.piece = document.createElement('div');
		this.piece.classList.add('piece');
		this.piece.style.backgroundImage = `url(images/${img}.png)`;


		boardGrid[row][col].appendChild(this.piece);

	}
}

let white_pawns = [
	new Piece(6, 0, 'w', 'wp', 'p'),
	new Piece(6, 1, 'w', 'wp', 'p'),
	new Piece(6, 2, 'w', 'wp', 'p'),
	new Piece(6, 3, 'w', 'wp', 'p'),
	new Piece(6, 4, 'w', 'wp', 'p'),
	new Piece(6, 5, 'w', 'wp', 'p'),
	new Piece(6, 6, 'w', 'wp', 'p'),
	new Piece(6, 7, 'w', 'wp', 'p')
];

let black_pawns = [
	new Piece(1, 0, 'b', 'bp', 'p'),
	new Piece(1, 1, 'b', 'bp', 'p'),
	new Piece(1, 2, 'b', 'bp', 'p'),
	new Piece(1, 3, 'b', 'bp', 'p'),
	new Piece(1, 4, 'b', 'bp', 'p'),
	new Piece(1, 5, 'b', 'bp', 'p'),
	new Piece(1, 6, 'b', 'bp', 'p'),
	new Piece(1, 7, 'b', 'bp', 'p')
];

let white_king = new Piece(7, 4, 'w', 'wk', 'k');
let black_king = new Piece(0, 4, 'b', 'bk', 'k');

let white_queen = new Piece(7, 3, 'w', 'wq', 'q');
let black_queen = new Piece(0, 3, 'b', 'bq', 'q');

let white_rooks = [new Piece(7, 0, 'w', 'wr', 'r'), new Piece(7, 7, 'w', 'wr', 'r')];
let black_rooks = [new Piece(0, 0, 'b', 'br', 'r'), new Piece(0, 7, 'b', 'br', 'r')];

let white_bishops = [new Piece(7, 2, 'w', 'wb', 'b'), new Piece(7, 5, 'w', 'wb', 'b')];
let black_bishops = [new Piece(0, 2, 'b', 'bb', 'b'), new Piece(0, 5, 'b', 'bb', 'b')];

let white_knights = [new Piece(7, 1, 'w', 'wn', 'n'), new Piece(7, 6, 'w', 'wn', 'n')];
let black_knights = [new Piece(0, 1, 'b', 'bn', 'n'), new Piece(0, 6, 'b', 'bn', 'n')];
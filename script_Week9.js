// Get the board element from the DOM
const board = document.getElementById('board');
const boardSize = 8;
const squares = [];

// Create the checkers board
for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        // Alternate colors for the squares
        if ((row + col) % 2 === 0) {
            square.classList.add('white');
        } else {
            square.classList.add('black');
            // Add blue pieces to the first three rows
            if (row < 3) {
                const piece = document.createElement('div');
                piece.classList.add('piece', 'blue');
                piece.draggable = true; // Make pieces draggable
                square.appendChild(piece);
            // Add red pieces to the last three rows
            } else if (row > 4) {
                const piece = document.createElement('div');
                piece.classList.add('piece', 'red');
                piece.draggable = true; // Make pieces draggable
                square.appendChild(piece);
            }
        }
        // Append the square to the board and save it in the squares array
        board.appendChild(square);
        squares.push(square);
    }
}

// Variables to track the selected piece and its original position
let selectedPiece = null;
let originalSquare = null;

// Add event listeners to each square for drag and drop functionality
squares.forEach(square => {
    square.addEventListener('dragstart', (e) => {
        if (square.children.length > 0) {
            selectedPiece = square.children[0];
            originalSquare = square;
        }
    });

    square.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow the drop
    });

    square.addEventListener('drop', (e) => {
        // Ensure the drop is on a black square and the square is empty
        if (selectedPiece && square.classList.contains('black') && square.children.length === 0) {
            const fromRow = originalSquare.dataset.row;
            const fromCol = originalSquare.dataset.col;
            const toRow = square.dataset.row;
            const toCol = square.dataset.col;

            // Check for a valid move (diagonal and one or two steps)
            if (Math.abs(toRow - fromRow) === 1 && Math.abs(toCol - fromCol) === 1) {
                square.appendChild(selectedPiece);
                selectedPiece = null;
                originalSquare = null;
            } else if (Math.abs(toRow - fromRow) === 2 && Math.abs(toCol - fromCol) === 2) {
                const middleRow = (parseInt(fromRow) + parseInt(toRow)) / 2;
                const middleCol = (parseInt(fromCol) + parseInt(toCol)) / 2;
                const middleSquare = squares.find(sq => sq.dataset.row == middleRow && sq.dataset.col == middleCol);
                if (middleSquare.children.length > 0 && middleSquare.children[0].classList.contains(selectedPiece.classList.contains('red') ? 'blue' : 'red')) {
                    middleSquare.removeChild(middleSquare.children[0]);
                    square.appendChild(selectedPiece);
                    selectedPiece = null;
                    originalSquare = null;
                }
            }
        }
    });
});

// Add row and col data attributes to each square
for (let i = 0; i < squares.length; i++) {
    const row = Math.floor(i / boardSize);
    const col = i % boardSize;
    squares[i].dataset.row = row;
    squares[i].dataset.col = col;
}

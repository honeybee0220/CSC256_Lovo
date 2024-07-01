// JavaScript to generate the chessboard dynamically
document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");
    
    // Loop to create 8x8 grid of squares
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            // Alternating red and black colors
            if ((row + col) % 2 === 0) {
                square.classList.add("red");
            } else {
                square.classList.add("black");
            }
            
            // Append the square to the chessboard
            chessboard.appendChild(square);
        }
    }
});
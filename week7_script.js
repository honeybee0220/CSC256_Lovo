document.addEventListener("DOMContentLoaded", () => {
    const crosswordContainer = document.getElementById("crossword"); // Get the crossword container element

    // Define the words for the crossword puzzle
    const words = [
        { word: "DALMATIAN", direction: "vertical", start: { row: 1, col: 3 } }, // "DALMATIAN" starts at (1, 3) and is vertical
        { word: "SIT", direction: "horizontal", start: { row: 7, col: 2 } }, // "SIT" starts at (7, 2) and intersects "DALMATIAN" at 'I'
        { word: "BALL", direction: "horizontal", start: { row: 2, col: 2 } } // "BALL" starts at (2, 2) and intersects "DALMATIAN" at the first 'A'
    ];

    // Create an 11x11 grid filled with empty strings
    const grid = Array(11).fill().map(() => Array(11).fill(""));

    // Place each word in the grid
    words.forEach(({ word, direction, start }) => {
        const { row, col } = start; // Get the starting position
        for (let i = 0; i < word.length; i++) { // Loop through each letter of the word
            if (direction === "vertical") {
                grid[row + i][col] = word[i]; // Place the letter in the grid for vertical words
            } else {
                grid[row][col + i] = word[i]; // Place the letter in the grid for horizontal words
            }
        }
    });

    // Create the crossword grid elements
    grid.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement("div"); // Create a div for each cell
            cellElement.classList.add("cell"); // Add the "cell" class
            cellElement.textContent = cell !== "" ? cell : " "; // Set the cell content
            crosswordContainer.appendChild(cellElement); // Append the cell to the crossword container
        });
    });
});


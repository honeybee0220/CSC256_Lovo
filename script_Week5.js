// Initialize an empty array to store movie titles
let movies = [];

// Function to add a movie to the list
function addMovie() {
    // Get the input element for the movie title
    const movieInput = document.getElementById('movieInput');
    
    // Get the trimmed value of the input (remove leading/trailing spaces)
    const movieTitle = movieInput.value.trim();
    
    // Check if the input is not empty
    if (movieTitle) {
        // Add the movie title to the array
        movies.push(movieTitle);
        
        // Sort the movie array alphabetically
        movies.sort();
        
        // Clear the input field
        movieInput.value = '';
    }
}

// Function to display the movie list
function displayList() {
    // Get the element where the movie list will be displayed
    const movieList = document.getElementById('movieList');
    
    // Clear the previous list
    movieList.innerHTML = '';
    
    // Iterate over the movie array
    movies.forEach((movie) => {
        // Create a paragraph element for each movie
        const listItem = document.createElement('p');
        
        // Set the text content of the paragraph to the movie title
        listItem.textContent = movie;
        
        // Append the paragraph to the movie list element
        movieList.appendChild(listItem);
    });
}

// Function to reset the movie list
function resetList() {
    // Clear the movie array
    movies = [];
    
    // Clear the displayed list
    document.getElementById('movieList').innerHTML = '';
}


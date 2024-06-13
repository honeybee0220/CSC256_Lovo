let movies = [];

function addMovie() {
    const movieInput = document.getElementById('movieInput');
    const movieTitle = movieInput.value.trim();

    if (movieTitle) {
        movies.push(movieTitle);
        movieInput.value = '';
    }
}

function displayList() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const listItem = document.createElement('p');
        listItem.textContent = movie;
        movieList.appendChild(listItem);
    });
}

function resetList() {
    movies = [];
    document.getElementById('movieList').innerHTML = '';
}

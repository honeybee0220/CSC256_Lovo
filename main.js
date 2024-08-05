// JavaScript for homepage interactivity

document.addEventListener('DOMContentLoaded', () => { // Event listener for when the DOM is fully loaded
    initSlideshow(); // Initialize the slideshow
});

function initSlideshow() {
    let slideIndex = 0; // Initialize slide index
    const slides = document.getElementsByClassName('slides'); // Get all elements with class 'slides'
    showSlides(); // Show the slides

    function showSlides() {
        for (let i = 0; i < slides.length; i++) { // Loop through all slides
            slides[i].style.display = 'none'; // Hide each slide
        }
        slideIndex++; // Increment the slide index
        if (slideIndex > slides.length) { // If the slide index exceeds the number of slides
            slideIndex = 1; // Reset the slide index
        }
        slides[slideIndex - 1].style.display = 'block'; // Display the current slide
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
}

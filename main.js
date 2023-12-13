// JavaScript
var ratingOptions = document.querySelectorAll('.rating-option');
ratingOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    // Remove 'selected' class from all options
    ratingOptions.forEach(function(opt) {
      opt.classList.remove('selected');
    });
    // Add 'selected' class to clicked option
    this.classList.add('selected');
  });
});

// On submit the rating, shows the thank you message for <button id="submit-rating">Submit</button> 
// Path: main.js
// JavaScript
var submitRating = document.getElementById('submit-rating'); // <button id="submit-rating">Submit</button>
submitRating.addEventListener('click', function() { // When the button is clicked
  var rating = document.querySelector('.rating-option.selected').getAttribute('data-value'); // Get the selected rating
  var ratingMessage = document.getElementById('rating-message'); // Get the rating message element
  ratingMessage.innerHTML = 'Thank you for rating ' + rating + ' stars!'; // Set the rating message

  // Get the rating and thank you sections
  var ratingSection = document.getElementById('rating-state');
  var thankYouSection = document.getElementById('thank-you-state');

  // Hide the rating section and show the thank you section
  ratingSection.style.display = 'none';
  thankYouSection.style.display = 'block'; // or 'flex', etc.
});
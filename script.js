// script.js

// Get the dark mode button element
const darkModeButton = document.getElementById('darkMode');

// Check if dark mode is initially enabled
const isDarkModeEnabled = document.body.classList.contains('dark-mode');

// Set the initial state of the button based on dark mode
if (isDarkModeEnabled) {
  darkModeButton.textContent = 'Light Mode';
} else {
  darkModeButton.textContent = 'Dark Mode';
}

// Add a click event listener to the button
darkModeButton.addEventListener('click', function() {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');
  
  // Update the button text based on the new state
  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light Mode';
  } else {
    darkModeButton.textContent = 'Dark Mode';
  }
});

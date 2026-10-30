// JavaScript file for launcher functionality
document.addEventListener('DOMContentLoaded', () => {
  // Prevent any click action on disabled navigation buttons
  const navButtons = document.querySelectorAll('.nav-bar .nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
});

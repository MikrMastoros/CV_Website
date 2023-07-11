// Add event listener to section buttons
var sectionButtons = document.querySelectorAll('.section-buttons button');
var contentSections = document.querySelectorAll('.content-section');

sectionButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var sectionId = this.getAttribute('data-section');

    // Hide all content sections
    contentSections.forEach(function(section) {
      section.style.display = 'none';
    });

    // Show selected content section
    document.getElementById(sectionId).style.display = 'block';
  });
});

// Toggle dark mode
var darkModeToggle = document.getElementById('dark-mode-toggle');
var body = document.querySelector('body');

darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

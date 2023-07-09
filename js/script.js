const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.section-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});

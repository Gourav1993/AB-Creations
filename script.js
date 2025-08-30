//JS
  
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu after clicking any nav link
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

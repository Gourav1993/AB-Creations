//JS

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Close menu after clicking any nav link (useful for mobile)
document.querySelectorAll('.nav-links li a:not(.dropbtn)').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Handle Dropdown on Mobile (Optional enhancement for better mobile UX)
const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropBtn && dropdownContent) {
    dropBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
}

// Note: A full image slider would require a JS library like Swiper.js or Slick.js, 
// or significantly more complex vanilla JS. The HTML structure is setup for it.

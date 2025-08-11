//   Setup and start animation! 
var typed = new Typed('#element', {
    //   strings: ['Web Developer', 'Web Designer.'],
      strings: ['Web Developer.'],
      typeSpeed: 50,
    });

// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: Simple contact form alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});
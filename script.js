//   Setup and start animation!
var typed = new Typed("#element", {
  //   strings: ['Web Developer', 'Web Designer.'],
  strings: ["Full-Stack Web Developer."],
  typeSpeed: 50,
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
const links = navLinks.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Optional: Simple contact form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Welcome message
// Typing animation
const words = [
  "Aspiring Developer",
  "Tech Explorer",
  "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector("#typing");

function typeEffect() {
  if (!typingElement) return;

  const word = words[wordIndex];

  typingElement.textContent = word.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > word.length) {
      deleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    charIndex--;

    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// Scroll reveal animation
const sections = document.querySelectorAll("section, .card");

sections.forEach(item => item.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

sections.forEach(item => observer.observe(item));

// Automatic footer year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

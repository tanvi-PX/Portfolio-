// Welcome message
console.log("Welcome to Tanvi's Portfolio!");

// Dynamic typing effect
const roles = [
    "Aspiring Developer",
    "Tech Enthusiast",
    "Creative Thinker",
    "Future Innovator"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.getElementById("role");

function typeEffect() {
    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        roleElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        roleElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// Current year in footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

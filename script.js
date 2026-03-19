const bio = "I’m an Electronics and Computer Science Engineering undergraduate with hands-on experience in building machine learning models, data-driven applications, and full-stack web solutions. I focus on building scalable, production-ready systems where hardware and intelligent software converge.";

let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function type() {
    if (charIndex < bio.length) {
        typingElement.innerHTML += bio.charAt(charIndex);
        charIndex++;
        setTimeout(type, 30);
    }
}

// Start typing when the terminal comes into view
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        type();
        observer.disconnect(); // Only type once
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector(".terminal-window"));

// Theme Toggle logic
function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

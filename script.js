// TYPEWRITER EFFECT
const text = "I am an Electronics and Computer Science Engineering undergraduate with hands-on experience in building machine learning models, data-driven applications, and full-stack web solutions. I focus on building scalable, production-ready systems where hardware and intelligent software converge.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 30); // Speed of typing
    }
}

// Trigger typing when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeEffect();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".terminal-window"));

// THEME TOGGLE
function toggleTheme() {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// Check saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}

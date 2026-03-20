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

if(document.querySelector(".terminal-window")) {
    observer.observe(document.querySelector(".terminal-window"));
}

// Theme Toggle logic with Icon Swap and LocalStorage
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.querySelector(".theme-toggle");
    
    body.classList.toggle("light-theme");
    
    if (body.classList.contains("light-theme")) {
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// Check for saved theme preference on load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const themeBtn = document.querySelector(".theme-toggle");
    
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeBtn.innerHTML = "☀️";
    }
});

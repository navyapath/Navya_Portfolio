const bio = "I’m an Electronics and Computer Science Engineering undergraduate with hands-on experience in building machine learning models, data-driven applications, and full-stack web solutions. I focus on building scalable, production-ready systems where hardware and intelligent software converge.";

let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function type() {
    if (typingElement && charIndex < bio.length) {
        // Using textContent is slightly faster and safer than innerHTML
        typingElement.textContent += bio.charAt(charIndex);
        charIndex++;
        setTimeout(type, 30);
    }
}

// Start typing when the terminal comes into view
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        type();
        observer.disconnect(); 
    }
}, { threshold: 0.5 });

const terminal = document.querySelector(".terminal-window");
if(terminal) {
    observer.observe(terminal);
}

// THEME TOGGLE LOGIC
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.querySelector(".theme-toggle");
    
    const isLight = body.classList.toggle("light-theme");
    
    // Update button icon
    themeBtn.innerHTML = isLight ? "☀️" : "🌙";
    
    // Save preference
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// APPLY THEME IMMEDIATELY (To prevent "flashing" on refresh)
(function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        // We handle the button icon after the DOM is ready below
    }
})();

// Handle the button icon state once the page loads
window.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.querySelector(".theme-toggle");
    if (localStorage.getItem("theme") === "light" && themeBtn) {
        themeBtn.innerHTML = "☀️";
    }
});

// Fade-in and slide animations on scroll
const fadeElements = document.querySelectorAll(".fade-element");
const slideElements = document.querySelectorAll(".slide-in");
// script.js

// Animate Home section on page load
window.addEventListener('DOMContentLoaded', () => {
    const homeHeading = document.querySelector('.home-section h1');
    const homeSubtitle = document.querySelector('.home-section .subtitle');

    // Animate heading
    homeHeading.classList.add('slide-active'); // triggers slide-in animation

    // Animate subtitle with a small delay
    setTimeout(() => {
        homeSubtitle.classList.add('fade-in');
    }, 500); 
});


function handleScrollAnimations() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("fade-in");
        }
    });

    slideElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("slide-active");
        }
    });
}

window.addEventListener("scroll", handleScrollAnimations);
handleScrollAnimations();

// Animated skill bars
const progressBars = document.querySelectorAll(".progress");

function animateSkillBars() {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.width;
        }
    });
}

window.addEventListener("scroll", animateSkillBars);
animateSkillBars();

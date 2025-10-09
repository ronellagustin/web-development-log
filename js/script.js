// script.js - Starter JavaScript for web-development-log

// Log to console to confirm JS is linked
console.log("script.js loaded successfully!");

// Example: placeholder function for future use
function greetVisitor() {
    alert("Welcome to Ronell Agustin's Web Development Log!");
}

// Example: store/retrieve a simple visit counter in localStorage
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
console.log(`You have visited this page ${visitCount} time(s).`);

// You can call greetVisitor() later on button click or page load
// greetVisitor();

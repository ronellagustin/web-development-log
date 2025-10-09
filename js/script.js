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


// Toggle the dropdown menu in the nav element
const toggles = document.querySelectorAll('.dropdown-toggle');

toggles.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    
    // Close all dropdowns first
    document.querySelectorAll('.dropdown-toggle').forEach(other => {
      other.setAttribute('aria-expanded', 'false');
    });

    // Then toggle only the clicked one (if it wasn’t already open)
    btn.setAttribute('aria-expanded', !expanded);
  });
});

// Close dropdowns when clicking anywhere else
document.addEventListener('click', e => {
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
  });
});
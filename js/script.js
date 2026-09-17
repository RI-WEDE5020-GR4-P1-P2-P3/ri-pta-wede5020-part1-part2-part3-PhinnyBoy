// QuickFix SA JavaScript file

// Tells the stylesheet that JavaScript is available.
// Without this class the mobile menu stays open, so the site still
// works properly if JavaScript is switched off.
document.documentElement.classList.add("js");

// Mobile navigation menu toggle
var toggleButton = document.querySelector(".nav-toggle");
var navLinks = document.querySelector(".nav-links");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("is-open");

    // Keeps screen readers informed about whether the menu is open
    toggleButton.setAttribute("aria-expanded", isOpen);
    toggleButton.textContent = isOpen ? "\u2715 Close Menu" : "\u2630 Menu";
  });
}

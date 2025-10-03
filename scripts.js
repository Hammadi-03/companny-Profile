
// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.getElementById('menu-toggle');
	const navLinks = document.querySelector('.nav-links');
	const hamburger = document.querySelector('.hamburger');
	if (menuToggle && navLinks && hamburger) {
		// For accessibility: allow clicking hamburger to toggle menu
		hamburger.addEventListener('click', function() {
			menuToggle.checked = !menuToggle.checked;
			// The CSS handles showing/hiding nav-links based on checkbox state
		});
		// Optional: close menu when a link is clicked (on mobile)
		navLinks.querySelectorAll('a').forEach(function(link) {
			link.addEventListener('click', function() {
				if (window.innerWidth <= 768) {
					menuToggle.checked = false;
				}
			});
		});
	}
});

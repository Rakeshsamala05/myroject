const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont'); // Hamburger button container
const smallMenu = document.querySelector('.header__sm-menu'); // The small (mobile) menu
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu'); // Hamburger icon
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close'); // Close icon
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link'); // Links in the small menu

// Event listener to toggle the menu visibility
hamMenuBtn.addEventListener('click', () => {
    // Toggle visibility of small menu
    smallMenu.classList.toggle('header__sm-menu--active'); // Show or hide menu

    // Toggle visibility of hamburger and close button
    headerHamMenuBtn.classList.toggle('d-none'); // Show or hide hamburger icon
    headerHamMenuCloseBtn.classList.toggle('d-none'); // Show or hide close icon
});

// Close menu when any link in the small menu is clicked
headerSmallMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide small menu
        smallMenu.classList.remove('header__sm-menu--active');

        // Show hamburger icon and hide close icon
        headerHamMenuBtn.classList.remove('d-none');
        headerHamMenuCloseBtn.classList.add('d-none');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContent = document.querySelector(".scroll-content");
    const items = [...scrollContent.children]; // Get original items

    // Duplicate items for seamless scrolling
    items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContent.appendChild(clone);
    });
});


"use strict"
// Burger menu
const iconMenu = document.querySelector('.menu-toggle');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('scroll-lock');
        iconMenu.classList.toggle('menu-toggle_active');
        menuBody.classList.toggle('menu_active');
    });
}

// Smooth scroll menu links
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('menu-toggle_active')) {
                document.body.classList.remove('scroll-lock');
                iconMenu.classList.remove('menu-toggle_active');
                menuBody.classList.remove('menu_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

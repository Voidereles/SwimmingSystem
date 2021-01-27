if (window.innerWidth < 1200) {
    $('.side-nav').toggleClass('left-0');
}

import 'bootstrap';
const navSearchContainer = document.querySelector('.nav__search-container');
let searchOffLeft;
const main = document.querySelector('.main');
const sideNav = document.querySelector('.side-nav');
const burgerSideMenu = document.getElementById('burgerSideMenu');
const burgerLastSpan = document.querySelector('.nav__burger.open span:nth-child(4)');
let sideNavToggled = true;


if (window.innerWidth > 992) {

    searchOffLeft = navSearchContainer.parentElement.offsetLeft + navSearchContainer.offsetLeft;
    document.querySelector('.side-nav').style.width = searchOffLeft + "px";
    main.style.marginLeft = searchOffLeft + "px";

    burgerSideMenu.addEventListener('click', function () {
        if (sideNavToggled == true) {
            sideNav.style.left = '-500px';
            main.style.marginLeft = 'initial';
            burgerLastSpan.style.width = '100%';
            sideNavToggled = false;
        } else {
            sideNav.style.left = '0px';
            main.style.marginLeft = searchOffLeft + "px";
            burgerLastSpan.style.width = '75%';
            sideNavToggled = true;
        }

    })
} else {
    document.querySelector('.nav').appendChild(sideNav);
}
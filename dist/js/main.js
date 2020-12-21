let menuButton = $('.menu-button');
let navbar = $('nav')
// console.log(menuButton);

menuButton.click(function () {
    navbar.toggleClass('open');
});
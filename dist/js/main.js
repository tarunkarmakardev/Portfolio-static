
let menuButton = $('.menu-button');
let navbar = $('nav')
// console.log(menuButton);

menuButton.click(function () {
    navbar.toggleClass('open');

    if ($('body').css("overflow") == "hidden") {
        $('body').css("overflow", "auto");
    }
    else {
        $('body').css("overflow", "hidden");
    }

});


let formInput = $('.form-row input, .form-row textarea');

formInput.focus(function () {

    if ($(this).attr("type") != "submit") {
        $(this).parents('.form-row').toggleClass('focused');
        if ($(this).is("textarea")) {
            $(this).attr("rows", "10");
            $(this).prev("label").css("transform", "translateY(-90px)");
        }
    }
});


formInput.blur(function () {
    if ($(this).attr("type") != "submit") {
        $(this).parents('.form-row').toggleClass('focused');
        if ($(this).is("textarea")) {
            $(this).attr("rows", "10");
            $(this).prev("label").css("transform", "translateY(0)");
        }
    }
});

import $ from "jquery";
window.$ = $;
window.jQuery = $;

$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});
$("body").scrollspy({
    target: "#mainNav",
    offset: 74,
});

// Collapse Navbar
var navbarCollapse = function () {
    var position = window.scrollY;
    if (position > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

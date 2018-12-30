$(document).ready(function() {
    $(".nav-item-dropdown").hover(
        function() {
            $(".dropdown-menu").stop(true, true).delay(200).fadeIn(200);
        },
        function() {
            $(".dropdown-menu").stop(true, true).delay(200).fadeOut(200);
        }
    );
});
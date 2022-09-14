$(document).ready(function () {
    $(".menu__burger").click(function (e) { 
        $(".menu__burger, .header__menu").toggleClass('active');
        $("body").toggleClass('lock');
    
});
});
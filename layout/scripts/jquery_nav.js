/*
Template Name: Sislaf
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

$("#backtotop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 600);
});

$("#aboutUs").click(function () {
    $("body,html").animate({
        scrollBot: 0
    }, 1000);
});

$("#ourMember").click(function () {
    $("body,html").animate({
        scrollBot: 0
    }, 1000);
});

$("#contacts").click(function () {
    $("body,html").animate({
        scrollBot: 0
    }, 1000);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
        $("#backtotop").addClass("visible");
    } else {
        $("#backtotop").removeClass("visible");
    }
});
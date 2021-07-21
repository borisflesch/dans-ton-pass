/*
* Template Name: PRO Card - Material Resume / CV / vCard Template
* Author: lmpixels
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.0
*/

(function($) {
"use strict";
    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }
    // /Hide Mobile menu

    //On Window load & Resize
    $(window)
        .on('resize', function() { //Resize
             mobileMenuHide();
        })
        .scroll(function () {
            if ($(window).scrollTop() < 20) {
                $('.header').removeClass('sticked');
            } else {
                $('.header').addClass('sticked');
            }
        })
        .scrollTop(0);


    // On Document Load
    $(document).on('ready', function() {
        // Mobile menu
        $('.menu-toggle').on("click", function () {
            $('#site_header').toggleClass('mobile-menu-hide');
        });

        // Mobile menu hide on main menu item click
        $('.site-main-menu').on("click", "a", function (e) {
            mobileMenuHide();
        });

        // Sidebar toggle
        $('.sidebar-toggle').on("click", function () {
            $('#blog-sidebar').toggleClass('open');
        });
    });

})(jQuery);

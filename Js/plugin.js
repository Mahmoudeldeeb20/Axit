$(document).ready(function() {
    $(".tabs .tabs-icon div").on("click", function() {
        $(this).addClass("tab-active").siblings().removeClass("tab-active")
    });


    $(".pricing-option .options:nth-of-type(1)").on("mouseenter", function() {
        $(".pricing-option .options:nth-of-type(1) li:nth-child(4)").animate({
            height: '35px'
        }, 500);
    });

    $(".pricing-option .options:nth-of-type(1)").on("mouseleave", function() {
        $(".pricing-option .options:nth-of-type(1) li:nth-child(4)").animate({
            height: '5px'
        }, 500);
    });


    $(".pricing-option .options:nth-of-type(2)").on("mouseenter", function() {
        $(".pricing-option .options:nth-of-type(2) li:nth-child(4)").animate({
            height: '35px'
        }, 500);
    });

    $(".pricing-option .options:nth-of-type(2)").on("mouseleave", function() {
        $(".pricing-option .options:nth-of-type(2) li:nth-child(4)").animate({
            height: '5px'
        }, 500);
    });

    $(function() {
        $("html").niceScroll({
            horizrailenabled: false,
        });
    });



    $(".pricing-option .options:nth-of-type(3)").on("mouseenter", function() {
        $(".pricing-option .options:nth-of-type(3) li:nth-child(4)").animate({
            height: '35px'
        }, 500);
    });

    $(".pricing-option .options:nth-of-type(3)").on("mouseleave", function() {
        $(".pricing-option .options:nth-of-type(3) li:nth-child(4)").animate({
            height: '5px'
        }, 500);
    });



    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".nav").css("background", "rgba(33,33,33,0.9)")
            $(".nav").css("position", "fixed")
            navItem.css("color", "white")
                //  console.log($(window).scrollTop());
        } else {
            $(".nav").css("background", "transparent")
                //$(".nav").css("position", "absolute")
            navItem.css("color", "white")
        }

    });

    $("#tab-one").on("click", function() {
        $("#tab-one-content").show().siblings().hide();
    });



    $("#tab-two").on("click", function() {
        $("#tab-two-content").show().siblings().hide();
    });




    $("#tab-three").on("click", function() {
        $("#tab-three-content").show().siblings().hide();
    });



});
$(document).ready(function() {

    // Change HTML Scroll Style
    $(function() {
        $("html").niceScroll({
            horizrailenabled: false,
        });
    });
    // Change Nav-Bar Style When Scroll
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".nav").css("background", "rgba(33,33,33,0.9)")
            $(".nav").css("position", "fixed")

        } else {
            $(".nav").css("background", "transparent")

        }
    });



    // Tap
    $(".tabs .tabs-icon div").on("click", function() {
        $(this).addClass("tab-active").siblings().removeClass("tab-active")
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

    // Pricing Option

    var optionOne = $(".pricing-option .options:nth-of-type(1)");
    var optionOneLi = $(".pricing-option .options:nth-of-type(1) li:nth-child(4)");

    var optionTwo = $(".pricing-option .options:nth-of-type(2)");
    var optionTwoLi = $(".pricing-option .options:nth-of-type(2) li:nth-child(4)");

    var optionThree = $(".pricing-option .options:nth-of-type(3)");
    var optionThreeLi = $(".pricing-option .options:nth-of-type(3) li:nth-child(4)");

    optionOne.on("mouseenter", function() {
        optionOneLi.animate({
            height: '35px'
        }, 500);
    });
    optionOne.on("mouseleave", function() {
        optionOneLi.animate({
            height: '5px'
        }, 500);
    });

    optionTwo.on("mouseenter", function() {
        optionTwoLi.animate({
            height: '35px'
        }, 500);
    });
    optionTwo.on("mouseleave", function() {
        optionTwoLi.animate({
            height: '5px'
        }, 500);
    });

    optionThree.on("mouseenter", function() {
        optionThreeLi.animate({
            height: '35px'
        }, 500);
    });
    optionThree.on("mouseleave", function() {
        optionThreeLi.animate({
            height: '5px'
        }, 500);
    });



});

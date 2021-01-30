$(function () {

    $("body").on("click", "#hamburger", function () {
        $(this).css("display", "none");
        $("#close").css("display", "block");
        $("nav").fadeIn(300, function () {
            $(this).fadeIn();
        }).css({
            "position": "relative",
            "z-index": "5"
        });
        $("main").css({
            "background": "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 25%, transparent 100%)"
        });
    });

    $("body").on("click", "#close", function () {
        $(this).css("display", "none");
        $("#hamburger").css("display", "block");
        $("nav").fadeOut(300, function () {
            $(this).fadeOut();
        });
        $("main").css({
            "background": "none"
        });
    });


    $(".carousel").owlCarousel({
        margin: 150,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // email verification

    $("body").on("click", "button", function (e) {
        e.preventDefault();
        let email = $("#email").val();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email == "") {

            $("#error-alert").css("display", "block").text("Please enter your email address");
            $("#email").parent().css("padding", ".2rem");
        } else if (re.test(String(email).toLowerCase()) == false) {
            $("#email").parent().css("padding", ".2rem");

            $("#error-alert").css("display", "block");
        };
    });
});



var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    autoplay: true,
    autoplayTimeout: 5000,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
});

$(function () {

    $("body").on("click", "#hamburger", function () {
        $(this).css("display", "none");
        $("#close").css("display", "block");
        $("nav").fadeIn(300, function () {
            $(this).fadeIn();
        }).css({
            "position": "relative",
            "z-index": "5",

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
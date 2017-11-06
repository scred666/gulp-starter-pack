$ = jQuery.noConflict();

$(function () {

    // Custom JS

    /*------------------------------------------------------
       WOW
    ------------------------------------------------------*/
    new WOW().init();
    /*------------------------------------------------------
       clip-path
    ------------------------------------------------------*/
    //    $(function () {
    //        var points1 = [
    //                [0, 0],
    //                [100, 0],
    //                [100, 100],
    //                [0, 100]
    //            ];
    //        var points2 = [
    //                [0, 0],
    //                [100, 35],
    //                [100, 100],
    //                [0, 65]
    //            ];
    //        if ($(window).width() < 768) {
    //            $('.multibord').clipPath(points1, {
    //                isPercentage: true
    //            });
    //        } else {
    //            $('.multibord').clipPath(points2, {
    //                isPercentage: true
    //            });
    //        }
    //    });
    /*------------------------------------------------------
       owl Carousel header init < 992
    ------------------------------------------------------*/
    //    function initSlider() {
    //        if ($(window).width() < 992) {
    //            $('#top .owl-carousel').owlCarousel({
    //                loop: false,
    //                margin: 0,
    //                nav: false,
    //                smartSpeed: 1000,
    //                responsive: {
    //                    0: {
    //                        items: 1
    //                    },
    //                    800: {
    //                        items: 1
    //                    },
    //                    1000: {
    //                        items: 5
    //                    }
    //                }
    //            });
    //        }
    //    }
    //    initSlider();
    /*------------------------------------------------------
       Slick slider
    ------------------------------------------------------*/
    //    $('.top').slick({
    //        arrows: false,
    //        dots: false,
    //        focusOnSelect: true,
    //        infinite: false,
    //        slidesToShow: 5,
    //        asNavFor: '.line',
    //        responsive: [
    //            {
    //                breakpoint: 992,
    //                settings: {
    //                    arrows: false,
    //                    dots: true,
    //                    dotsClass: 'dots',
    //                    focusOnSelect: true,
    //                    asNavFor: '.line',
    //                    slidesToShow: 1,
    //                }
    //            },
    //            {
    //                breakpoint: 480,
    //                settings: {
    //                    arrows: false,
    //                    dots: true,
    //                    dotsClass: 'dots',
    //                    focusOnSelect: true,
    //                    asNavFor: '.line',
    //                    slidesToShow: 1,
    //                }
    //            }
    //        ]
    //    });
    /*------------------------------------------------------
       owl Carousel 
    ------------------------------------------------------*/
    //    $('#advantage .owl-carousel').owlCarousel({
    //        center: true,
    //        loop: true,
    //        smartSpeed: 1000,
    //        margin: 10,
    //        responsive: {
    //            0: {
    //                items: 1
    //            },
    //            800: {
    //                items: 3
    //            },
    //            1000: {
    //                items: 5
    //            }
    //        }
    //    });

    /*------------------------------------------------------
       Fancy BOX
    ------------------------------------------------------*/
    //    $("[data-fancybox]").fancybox({
    //        // Options will go here
    //    });
    /*------------------------------------------------------
       POPOVER
    ------------------------------------------------------*/
    //    $(function () {
    //        $('[data-toggle="popover"]').popover({
    //            html: true,
    //            selector: true
    //        })
    //    });
    /*------------------------------------------------------
       при скроле скрывать корзину
    ------------------------------------------------------*/
    //    window.onscroll = function () {
    //        $('.cart-button').popover('destroy');
    //    }
    /*------------------------------------------------------
       function пересчета vh vw в пиксели
    ------------------------------------------------------*/
    function viewportToPixels(value) {
        var parts = value.match(/([0-9\.]+)(vh|vw)/)
        var q = Number(parts[1])
        var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
        return side * (q / 100)
    };
    /*------------------------------------------------------
       fixed menu
    ------------------------------------------------------*/

    //    $(document).on("scroll", function () {
    //        var h = viewportToPixels('60vh');
    //        if ($(document).scrollTop() > h) {
    //            $("nav").addClass("fixed-top slideInDown animated");
    //        } else {
    //            $("nav").removeClass("fixed-top slideInDown");
    //        }
    //    });

    /*------------------------------------------------------
       animation scroll
    ------------------------------------------------------*/
    $(document).ready(function () {
        $(".navbar-nav a").click(function (event) {
            //отменяем стандартную обработку нажатия по ссылке
           

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({
                scrollTop: top - 100
            }, 1000);
        });
    });
    /*------------------------------------------------------
       закрытие колапса при нажатии
    ------------------------------------------------------*/
    $(document).ready(function () {
        $(".navbar-nav a").click(function (e) {
            
            $('.navbar-collapse.show').collapse('hide');
        });
    });

    /*------------------------------------------------------
       hidden go to top
    ------------------------------------------------------*/
    //    $(".arrow-up").hide();
    //    if ($(window).scrollTop() >= "250") $(".arrow-up").fadeIn("slow")
    //    $(window).scroll(function () {
    //        if ($(window).scrollTop() <= "250") $(".arrow-up").fadeOut("slow")
    //        else $(".arrow-up").fadeIn("slow")
    //    });

    //////////Accordion + -///////////////
    //    $("#accordion h4 a").click(function (e) {
    //        e.preventDefault();
    //        if ($(this).children("i").hasClass('fa-chevron-up')) {
    //            $(this).children("i").removeClass('fa-chevron-up');
    //            $(this).children("i").addClass('fa-chevron-down');
    //        } else {
    //            $('#accordion h4 a .fa').removeClass('fa-chevron-up');
    //            $('#accordion h4 a .fa').addClass('fa-chevron-down');
    //            $(this).children("i").addClass('fa-chevron-up');
    //            $(this).children("i").removeClass('fa-chevron-down');
    //
    //
    //        }
    //    });
    /*------------------------------------------------------
         VIDEO BG
    ------------------------------------------------------*/
/*
    $(document).ready(function () {
        var div1 = document.getElementById("customElement1");
        var iframe1 = div1.getElementsByTagName("iframe")[0].contentWindow;
        var div2 = document.getElementById("customElement2");
        var iframe2 = div2.getElementsByTagName("iframe")[0].contentWindow;

        //        myPlayer = jQuery("#video1").YTPlayer(); //video bg

        $('#customElement1 img').click(function () {
            //jQuery('#video1').YTPPlay();
            iframe1.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            $('#video1').css('opacity', '1');
            $(this).addClass('hidden');
            $('.pos-rel-video1').removeClass('hidden');
            $('#close1').removeClass('hidden');
        });
    });
*/

    /*--------------------------
        device js
    --------------------------*/
    if (!device.tablet() && !device.mobile()) {

    }

    /*------------------------------------------------------
         АДАПТИВКА
    ------------------------------------------------------*/

    /*------------------------------------------------------
         отправка формы
    ------------------------------------------------------*/

    /*document.getElementById('send-form').addEventListener('submit', function (evt) {
        var http = new XMLHttpRequest(),
            f = this
        //url = $('#send-form').find('#send').attr('data-url');
        evt.preventDefault();
        http.open("POST", "send.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("&name=" + f.name.value + "&email=" + f.email.value + "&phone=" + f.phone.value + "&msg=" + f.msg.value);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                alert('Ваше сообщение отправлено.');
                f.name.removeAttribute('value');
                f.email.removeAttribute('value');
                f.phone.removeAttribute('value');
                f.msg.removeAttribute('value');
                f.name.value = '';
                f.email.value = '';
                f.phone.value = '';
                f.msg.value = '';
            }
        }
        http.onerror = function () {
            alert('Извините, данные не были переданы');
        }
    }, false);*/
});

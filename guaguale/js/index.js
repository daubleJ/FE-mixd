$(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        /*scrollbar: '.swiper-scrollbar',*/
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    /*规则*/
    $('.rule_btn').click(function () {
        $('.rule-model').show();
        var swiper1 = new Swiper('.text-wrap', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
        $('.text-wrap .nav').click(function () {
            $('.text-wrap .text').toggle();
            var swiper1 = new Swiper('.text-wrap', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                mousewheel: true,
            });
        });

    });
    $('.rule-model .close').click(function () {
        $('.rule-model').hide();
    });

    /*红包弹出内容滚动*/
    var swiper3 = new Swiper('.hongbao_swiper', {
        direction: 'vertical',
        slidesPerView: 'auto',
        /*freeMode: true,*/
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
    $('.hongbao_list .swiper-slide').click(function () {
        $('.hongbao_model').show();
        $('.hongbao_model .hongbao_model_container').slideDown();

    });
    $('.hongbao_model .close').click(function () {
        $('.hongbao_model').slideUp();
    });
    $('.btn-shake').click(function () {
        $(this).hide();
    });
});
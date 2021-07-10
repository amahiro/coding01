document.addEventListener('DOMContentLoaded', function(){
    //フェードインアニメーション
    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 50){
                    $(this).addClass('scrollin');
                }
            });
        });
    });
    //ページトップリンク
    $(function(){
        var top_link = $(".top-link");
        top_link.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                // top_link.css( "bottom", "30px" );
                $(top_link).addClass('top-open');
            } else {
                // top_link.css( "bottom", "-85px" );
                $(top_link).removeClass('top-open');
            }
        });
    });

    //固定ヘッダー
    $(function(){
        $('.header').each(function () {
            var $window = $(window),
            $header = $(this),
                headerOffsetTop = $header.offset().top;
                $window.on('scroll', function () {
                if ($window.scrollTop() > headerOffsetTop) {
                    $header.addClass('header__fixed');
                    } else {
                    $header.removeClass('header__fixed');
                }
            });
            $window.trigger('scroll');
        });
    });
    new Hamburger();
    new HeroSlider('.swiper-container');
});
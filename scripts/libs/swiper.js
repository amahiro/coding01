class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            effect: 'fade',
            loop: true,
            centeredSlides: true,
            grabCursor: false,
            slidesPerView: 1,
            speed: 1500,
            parallax: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }
        });
    }
}
particlesJS.load('particles-js', 'js/particles.json');

document.querySelector('.header').style.visibility = 'hidden';
document.querySelector('.header').style.opacity = '0';
document.querySelector('.page__back-to-top').style.visibility = 'hidden';
document.querySelector('.page__back-to-top').style.opacity = '0';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    for (let elem of (document.querySelectorAll('.screen__title'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.screen__subsubtitle'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.screen__subtitle'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.screen__paragraph'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.screen__button'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.content__buttons'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.content__details'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    for (let elem of (document.querySelectorAll('.content__timeline'))) {
        elem.removeAttribute('data-swiper-parallax');
        elem.removeAttribute('data-swiper-parallax-opacity');
        elem.removeAttribute('data-swiper-parallax-duration');
    }

    document.querySelector('.page__background').removeAttribute('data-swiper-parallax');
    document.querySelector('.page__background').removeAttribute('data-swiper-parallax-opacity');
    document.querySelector('.page__background').removeAttribute('data-swiper-parallax-duration');
    document.querySelector('.screen__image').removeAttribute('data-swiper-parallax');
    document.querySelector('.screen__image').removeAttribute('data-swiper-parallax-opacity');
    document.querySelector('.screen__image').removeAttribute('data-swiper-parallax-duration');
    document.querySelector('.content__skills').removeAttribute('data-swiper-parallax');
    document.querySelector('.content__skills').removeAttribute('data-swiper-parallax-opacity');
    document.querySelector('.content__skills').removeAttribute('data-swiper-parallax-duration');
    document.querySelector('.portfolio__workslist').removeAttribute('data-swiper-parallax');
    document.querySelector('.portfolio__workslist').removeAttribute('data-swiper-parallax-opacity');
    document.querySelector('.portfolio__workslist').removeAttribute('data-swiper-parallax-duration');

}


// screen__title screen__subsubtitle screen__button page__background screen__paragraph screen__image content__buttons content__timeline content__skills portfolio__workslist content__details

let pageSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: "vertical",
    slidesPerView: "auto",
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    watchOverflow: true,
    speed: 500,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        draggable: true,
    },
    init: false,

    on: {
        init: function () {
            menuSlider();
        },
        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        }
    },
    parallax: true,
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 500);
                menuLink.classList.add('_active');
                e.preventDefault();
            })
        }
    }
}

function menuSliderRemove(params) {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

pageSlider.init();

const contact = document.querySelector('.screen__button_contact');
contact.addEventListener('click', function () {
    pageSlider.slideTo(7);
});

const backToTop = document.querySelector('.page__back-to-top');
backToTop.addEventListener('click', function () {
    pageSlider.slideTo(0);
    document.querySelector('.header').style.visibility = 'hidden';
    document.querySelector('.header').style.opacity = '0';
    document.querySelector('.page__back-to-top').style.visibility = 'hidden';
    document.querySelector('.page__back-to-top').style.opacity = '0';
});



document.addEventListener('wheel', onwheel);


function onwheel() {
    document.querySelector('.screen_hero');
    if (document.querySelector('.screen_hero').classList.contains('swiper-slide-visible')){
        document.querySelector('.header').style.visibility = 'hidden';
        document.querySelector('.header').style.opacity = '0';
        document.querySelector('.page__back-to-top').style.visibility = 'hidden';
        document.querySelector('.page__back-to-top').style.opacity = '0';
    }
    else {
        document.querySelector('.header').style.visibility = 'visible';
        document.querySelector('.header').style.opacity = '1';
        document.querySelector('.page__back-to-top').style.visibility = 'visible';
        document.querySelector('.page__back-to-top').style.opacity = '1';
    }
}

/*if(menuLinks[pageSlider.realIndex].classList.contains('_logo')) {
    document.querySelector('.header').style.visibility = 'hidden';
    document.querySelector('.header').style.opacity = '0';
}*/


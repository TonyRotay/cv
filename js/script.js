particlesJS.load('particles-js', 'js/particles.json');

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

/*if(menuLinks[pageSlider.realIndex].classList.contains('_logo')) {
    document.querySelector('.header').style.visibility = 'hidden';
    document.querySelector('.header').style.opacity = '0';
}*/


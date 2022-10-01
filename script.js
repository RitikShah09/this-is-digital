var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var tl = gsap.timeline();
tl.from("#nav", {
    y: -200,
    opacity: 0,
    duration: .5,
    ease: Bounce.easeOut,
})
    .from("#page1 h1", {
        opacity: 0,
        duration: .3,
        ease: Expo.easeInOut,
    }, "-=.5")
    .from("#img1", {
        y: 200,
        duration: 1.5,
        ease: Expo.easeInOut,
        opacity: 0,
    }, "-=.3")
    .from("#img2", {
        x: 200,
        duration: 1.5,
        ease: Expo.easeInOut,
        opacity: 0,
    }, "-=2")
    .from("#img3", {
        y: -200,
        duration: 1.5,
        ease: Expo.easeInOut,
        opacity: 0,
    }, "-=2")
var menu = document.querySelector("#menu")
var nv = document.querySelector("#nv")
var flag = 0;
menu.addEventListener("click", function () {
    if (flag === 0) {
        menu.className = "ri-close-fill";
        nv.style.bottom = "10%";
        flag = 1;
    }
    else {
        menu.className = "ri-menu-4-line";
        nv.style.bottom = "-100%";
        flag = 0;
    }
})
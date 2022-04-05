// new Swiper('.swiper-wrapper');

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: false,

    pagination: {
        el: '.swiper-pagination',
    },

});

const swiper1 = new Swiper('.swiper1', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidersPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// const swiper3 = new Swiper('.swiper3', {
//     loop: true,
//     slidersPerView: 1,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

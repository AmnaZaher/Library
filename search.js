var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // عدد الكتب الظاهرة في نفس الوقت
    spaceBetween: 20, // المسافة بين كل كتاب
    loop: true, // تشغيل التمرير اللانهائي
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 4 }, // في الشاشات الكبيرة
        768: { slidesPerView: 3 }, // في التابلت
        480: { slidesPerView: 2 }, // في الهواتف الصغيرة
        320: { slidesPerView: 1 } // في الهواتف الأصغر
    }
});

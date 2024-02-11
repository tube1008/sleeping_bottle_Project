document.addEventListener('DOMContentLoaded', function () {
    var popup = document.querySelector('.popUp');
    var closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

let slide = new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop:'true',
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:5000,}
})
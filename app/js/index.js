const previous = document.querySelector('.slide-control--previous');
const next = document.querySelector('.slide-control--next');
const slides = document.querySelectorAll('.slide');

let slideIndex = 1;

previous.addEventListener('click', function () {
    nextSlide(-1);
})
next.addEventListener('click', function () {
    nextSlide(1);
})

function nextSlide(n) {
    currentSlide(slideIndex += n);
}

function currentSlide(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
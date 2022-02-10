// buttons
const previous = document.querySelector('.slide-control--previous');
const next = document.querySelector('.slide-control--next');

// slides
const slideOne = document.querySelector('.slide--one');
const slideTwo = document.querySelector('.slide--two');

previous.addEventListener('click', function() {
    slideOne.classList.toggle('current');
    slideTwo.classList.toggle('next');
})

next.addEventListener('click', function() {
    slideOne.classList.toggle('current');
    slideTwo.classList.toggle('next');
})
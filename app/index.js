const previous = document.querySelector('.slide-control--previous');
const next = document.querySelector('.slide-control--next');

const slideOne = document.querySelector('.slide--one');
const slideTwo = document.querySelector('.slide--two');

previous.addEventListener('click', function() {
    slideOne.style.display = 'none';
    slideTwo.style.display = 'block';
})

next.addEventListener('click', function() {
    slideOne.style.display = 'block';
    slideTwo.style.display = 'none';
})
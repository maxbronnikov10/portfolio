const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__ratings-percent'),
    lines = document.querySelectorAll('.skills__ratings-line span');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


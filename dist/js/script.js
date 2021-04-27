const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});


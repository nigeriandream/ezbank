const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // navbar.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)';
        navbar.style.background = '#ffffffef';
    } else {
        // navbar.style.boxShadow = 'none';
        navbar.style.background = '#fff';
    }

});


const highStack = document.querySelector('.high-stack');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    highStack.style.transform = `translateX(${currentScrollY}px)`;
});
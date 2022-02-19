const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.addEventListener('click', () => {
    setTimeout(function () {
        document.body.classList.toggle('nav-open')
    }, 1000)
})


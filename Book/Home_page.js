let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .service-content, .project-box, .contact form',{origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Software Developer','Data analyst','Entrepreneur'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true,
});


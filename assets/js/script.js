
/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const navLinks = document.querySelectorAll('.nav__link');

const showMenu = () => {
    navMenu.classList.add('show__menu');
}

const hideMenu = () => {
    navMenu.classList.remove('show__menu');
}

navToggle.addEventListener('click' , showMenu);
navClose.addEventListener('click' , hideMenu);

navLinks.forEach((links) => {
    links.addEventListener('click', hideMenu);
})


/*=============== SWIPER HOME ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('.header');

window.addEventListener("scroll" , () => {
    const height = window.pageYOffset;
    if(height > 200) {
        header.classList.add('change__header');
    } else {
        header.classList.remove('change__header');
    }
})

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/





/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/
/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
});

sr.reveal(`.home__container ,  .service__content  .footer__container`)
sr.reveal(`.home__title `, {delay:600})
sr.reveal(`.home__subtitle `, {delay:800})
sr.reveal(`.home__description `, {delay:800})
sr.reveal(`.home__icons `, {delay:1000})
sr.reveal(`.home__btn `, {delay:1200})
sr.reveal(`.education__heading`, {origin:'right' , delay: 1200})
sr.reveal(`.education__subheading`, {origin:'left' ,delay: 1200 })
sr.reveal(`.skill__content `,   {origin:'left', delay: 1200})
sr.reveal(`.service__data`, {interval:700})
sr.reveal(`.contact__form`, {origin:'left'})
sr.reveal(`.contact__box`, {origin:'right'})
sr.reveal(`.contact__box`, {interval:800})
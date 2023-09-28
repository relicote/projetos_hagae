// window.sr = ScrollReveal({reset: false});

// sr.reveal('.hero-title', {duration: 1000});
// sr.reveal('.hero-text', {duration: 1000});

// sr.reveal('.section-title', {duration: 1000});
// sr.reveal('.card-title', {duration: 1000});
// sr.reveal('.cta-title', {duration: 1000});

// // REVEAL CONTENT LIST 
// sr.reveal('.about-list',{
//     rotate: {x: 0, y: 100, z:0},
//     duration: 2000
// });

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
})

sr.reveal(`.hero-title, .footer-top, .hero-text`)
sr.reveal(`.btn-primary`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.calculate__content`, {origin: "left"})
sr.reveal(`.hero-banner, .calculate__img`, {origin: "right"})
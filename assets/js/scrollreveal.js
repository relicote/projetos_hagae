const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

// show up
sr.reveal(`.hero-title, .footer-top, .hero-text, .section-title, .cta-title`)

// show bottom
sr.reveal(`.btn-primary, .btn-secondary, .btn-secondary-grow, .about-list, .section-text, .faq`, {delay: 400, origin: 'bottom'})

// show delay only
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})

// show left
sr.reveal(`.about-bottom-banner`, {delay: 700, origin: "left"})
sr.reveal(`.left-text, .contact-content`, {origin: "left"})

// show right
sr.reveal(`.hero-banner, .for-who-list, .why-us-description, .right-text, .contact-form`, {origin: "right"})
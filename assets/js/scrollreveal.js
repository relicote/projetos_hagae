const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal(`.hero-title, .footer-top, .hero-text, .section-title`)
sr.reveal(`.btn-primary, .btn-secondary, .btn-secondary-grow, .about-list, .section-text`, {delay: 400, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.about-bottom-banner`, {delay: 700, origin: "left"})
sr.reveal(`.left-text`, {origin: "left"})
sr.reveal(`.hero-banner, .for-who-list, .why-us-description, .right-text`, {origin: "right"})
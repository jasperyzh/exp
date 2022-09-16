
// Remember to include the smooth scroll polyfill:
// (https://github.com/iamdustan/smoothscroll)

// To Section
const navLinks = document.querySelectorAll(
    'nav ul li a'
    // look for a:href with only hash(#) and ID-selector
);

// if anchor-href found
Array.from(navLinks).forEach(navLink => {
    const href = navLink.getAttribute('href');
    const section = document.querySelector(href);
    const offset = 50 + 20; // nav and offset

    navLink.onclick = e => {
        // get body position
        const bodyRect = document.body.getBoundingClientRect().top;
        // get section position relative
        const sectionRect = section.getBoundingClientRect().top;
        // subtract the section from body
        const sectionPosition = sectionRect - bodyRect;
        // subtract offset
        const offsetPosition = sectionPosition - offset;

        e.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
})


// scroll-to-top
/* document.getElementById('#back-to-top').onclick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
} */
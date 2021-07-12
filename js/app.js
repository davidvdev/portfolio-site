
// NAV Toggle
// Basic functionality implemented with help from W3 & Stack Overflow
// W3: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// SO: https://stackoverflow.com/questions/18050761/toggle-visibility-property-of-div

const toggleNav = $(`.fa-bars`).on(`click`, () => {
    const $NavLinks = $(`.nav-link`);
    if ($NavLinks.css(`display`) === `block`) {
        $NavLinks.css(`display`,`none`)
    } else {
        $NavLinks.css(`display`,`block`)
    }
})



// NAV Toggle
// Basic functionality implemented with help from W3 & Stack Overflow
// W3: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// SO: https://stackoverflow.com/questions/18050761/toggle-visibility-property-of-div

// ... and then a lot of that got scrapped for jQuery .slideToggle
// https://api.jquery.com/slideToggle/

const toggleNav = $(`.fa-bars`).on(`click`, () => {
    const $NavLinks = $(`.nav-link-list`);
    if ($NavLinks.css(`display`) !== `none`) {
      $NavLinks.slideToggle(500)
      // $NavLinks.css(`display`,`none`) 
    } else {
        $NavLinks.slideToggle(500)
        // $NavLinks.css(`display`,`block`)
    }
})


// Google Sheet API Call using jQuery
// $.ajax("https://docs.google.com/spreadsheets/d/18t7o7jtwXsDRKUEUge9CFPbaVwezAvDzNQxUNaOM590/edit#gid=0")
// .then((data) => {
//     console.log(data);
// })

$.ajax("./json/projects.json")
.then((data) => {
    data.forEach((project, index) => {
        const $container = $('.work-card-gallery')
        const $card = $('<div class="work-card">')
        $card.html(`
        <img src="${project.image}" alt="a photo of the ${project.name} project" />
        <div class="card-text">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
        <div class="card-button-group">
            <a class="card-button card-code" href="${project.github}">Code</a>
            <a class="card-button card-live"href="${project.deployed}">Live</a>
            <a class="card-button card-ask-${project.index}" href="#Contact">Ask Me</a>
        </div>
        `)
        $container.append($card)
    })
})
.catch((error) => console.log(error))

// Formspree Script
var form = document.getElementById("contact-me");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-me-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
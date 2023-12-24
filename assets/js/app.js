// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx26Fgcnwsuiopa8DjPC6JOXwk1Ryfy9lyfg42AdYMjqBzAMIPtvADlUW1qu14KDBeMug/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
  msg.innerHTML = "Message sent successfully"
  setTimeout(function(){
    msg.innerHTML = ""
  },5000)
  form.reset()

})

.catch(error => console.error('Error!', error.message))

})

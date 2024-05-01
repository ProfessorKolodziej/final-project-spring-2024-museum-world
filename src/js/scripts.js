// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const shrinkHeaderSize = 200;

function shrinkHeader() {
    const scroll = getCurrentScroll();
    if (scroll >= shrinkHeaderSize) {
        document.querySelector('.title-container').classList.add('smaller');

    } else {
        document.querySelector('.title-container').classList.remove('smaller');

    }
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

window.addEventListener("scroll", shrinkHeader);

const linksbutton = document.querySelector('#toggledButton');

function checkScroll() {
    if (window.scrollY > 600) {
        linksbutton.style.opacity = 1;
    } else {
        linksbutton.style.opacity = 0;
    }
}

window.addEventListener('scroll', checkScroll);

//Find the element to hide
const toggledLinks = document.querySelector("ul");
console.log(toggledLinks);

// Write a function that toggles the show/hide classes
function toggleLinks() {
    toggledLinks.classList.toggle("hide");
    toggledLinks.classList.toggle("show");
    console.log(toggledLinks);
}

// Find the button and toggle the paragraph happen when we click it
const toggleButton = document.querySelector("#toggledButton");

toggleButton.addEventListener("click", toggleLinks);
// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const shrinkHeaderSize = 872;

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
// Settings
const delay = 75;
const delayAtEnd = 1000;
const cursorTimer = 350;

let typewriters = [];

// Create a typewriter
function Typewrite(element, texts) {
    if (typewriters[element] === true) return;
    typewriters[element] = true;
    console.log("new typewriter");

    let textIndex = Math.floor(Math.random() * (texts.length - 1)); // start at a random text
    let charIndex = 0;
    const next = () => {
        if (!element) return;
        let changedText = false;

        // increase index and check if end
        charIndex++;
        if (charIndex > texts[textIndex].length) {
            changedText = true;
            textIndex++;
            charIndex = 0;
            if (textIndex + 1 > texts.length) {
                textIndex = 0;
            }
        }

        // update text
        const textToShow = texts[textIndex].substring(0, charIndex);
        if (textToShow !== "") {
            element.innerHTML = textToShow;
        }

        if (texts[textIndex].charAt(charIndex) === " ") {
            // skip if charcater is space
            next();
            return;
        }

        // delay next
        setTimeout(next, changedText ? delayAtEnd : delay);
    };

    let cursorShown = false;
    const toggleCursor = () => {
        if (!element) return;
        cursorShown = !cursorShown;
        if (cursorShown) {
            element.style.borderRight = "1px solid #aaaaaa";
        } else {
            element.style.borderRight = "none";
        }
        setTimeout(toggleCursor, cursorTimer);
    };

    next();
    toggleCursor();
}

export default Typewrite;

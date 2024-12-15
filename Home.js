// Array of strings to type
const textArray = [
    "Welcome! Let me take you to my recent work",
    "Explore my Projects",
    "Read my Blogs",
    "And many more to come ..."
];

let index = 0; // Index of the current string
let charIndex = 0; // Index of the current character

function type() {
    const typedTextElement = document.getElementById("typed-text");
    const currentText = textArray[index];
    const char = currentText[charIndex];

    // Display the current character
    typedTextElement.textContent += char;

    charIndex++;

    // Move to the next string when the current one is completed
    if (charIndex === currentText.length) {
        index++;
        charIndex = 0;

        // Reset the typed text for the next string after a short delay
        setTimeout(() => {
            typedTextElement.textContent = "";
            // Start typing the next string after another short delay
            setTimeout(type, 500);
        }, 1000);
    } else {
        // Start typing the next character after a short delay
        setTimeout(type, 100);
    }
}

// Start the typing effect
type();



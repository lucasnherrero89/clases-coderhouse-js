// Get the dinosaur element
const dinosaur = document.getElementById('dinosaur');

// Set initial position and jump state
let position = 0;
let isJumping = false;

// Function to handle key press events
function handleKeyPress(event) {
    if (event.keyCode === 32 && !isJumping) { // 32 is the key code for spacebar
        isJumping = true;
        jump();
    }
}

// Function to handle the jump animation
function jump() {
    let count = 0;
    const jumpInterval = setInterval(() => {
        // Move the dinosaur up
        position += 20;
        dinosaur.style.bottom = position + 'px';

        // Make the dinosaur come down after reaching the peak of the jump
        if (count === 10) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                position -= 20;
                dinosaur.style.bottom = position + 'px';

                // Reset the jump state when the dinosaur lands
                if (position === 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
            }, 20);
        }

        count++;
    }, 20);
}

// Event listener for key presses
document.addEventListener('keydown', handleKeyPress);
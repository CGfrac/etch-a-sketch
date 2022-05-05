const MIN_SQUARES_PER_SIDE = 1;
const MAX_SQUARES_PER_SIDE = 100;
const container = document.querySelector('#container');

function setPixelsListeners() {
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', changePixelColor);
    });
}

function createGrid(squaresPerSide) {
    // Remove 2px because of the borders
    const containerSideLength = container.offsetWidth - 2;

    const numberOfElements = squaresPerSide * squaresPerSide;
    const sideLength = containerSideLength / squaresPerSide;

    for (let i = 0; i < numberOfElements; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';

        pixel.style.height = `${sideLength}px`;
        pixel.style.width = `${sideLength}px`;

        container.appendChild(pixel);
    }

    setPixelsListeners();
}

function changePixelColor(event) {
    event.target.style.backgroundColor = 'black';
}

function promptUser() {
    let value;
    do {
        const input = prompt(`How many squares per side (between ${MIN_SQUARES_PER_SIDE} and ${MAX_SQUARES_PER_SIDE})?`);

        // Make sure user can cancel the prompt
        if (input === null) {
            return input;
        }

        value = parseInt(input, 10);
    } while (isNaN(value) ||
        value < MIN_SQUARES_PER_SIDE ||
        value > MAX_SQUARES_PER_SIDE);
    
    return value;
}

function clearGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function changeGrid() {
    const input = promptUser();
    if (input === null) return;

    clearGrid();
    createGrid(input);
}

createGrid(16);

changeButton = document.querySelector('#set-grid-size');
changeButton.addEventListener('click', changeGrid);
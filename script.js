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
    const sideLength = Math.floor(containerSideLength / squaresPerSide);

    // It's necessary to adjust the container's width after flooring sideLength
    container.style.width = `${squaresPerSide * sideLength}px`;

    for (let i = 0; i < numberOfElements; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';

        pixel.style.height = `${sideLength}px`;
        pixel.style.width = `${sideLength}px`;

        container.appendChild(pixel);
    }

    setPixelsListeners();
}

function parseRGB(rgbText){
    return rgbText.substring(4, rgbText.length - 1).replace(/ /g, '').split(',');
}

function updateColor(currentColor) {
    const rgbArray = parseRGB(currentColor);

    for (let i = 0; i < rgbArray.length; i++) {
        const value = parseInt(rgbArray[i]);

        if (value === 255) {
            rgbArray[i] = Math.floor(Math.random() * 255) + 1;
        } else {
            // Add 10% of black for each hover
            rgbArray[i] -= Math.floor((255 / 10));
        }
    }

    const newColor = `rgb(${rgbArray.join(',')})`;

    return newColor;    
}

function changePixelColor(event) {
    const element = event.target
    element.style.backgroundColor = updateColor(getComputedStyle(element).backgroundColor);
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
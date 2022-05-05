const container = document.querySelector('#container');

// We remove 2px because of the borders
const CONTAINER_SIDE_LENGTH = container.offsetWidth - 2;

function createGrid(squaresPerSide) {
    const numberOfElements = squaresPerSide * squaresPerSide;

    for (let i = 0; i < numberOfElements; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';

        const sideLength = CONTAINER_SIDE_LENGTH / squaresPerSide;

        pixel.style.height = `${sideLength}px`;
        pixel.style.width = `${sideLength}px`;

        container.appendChild(pixel);
    }
}

createGrid(16);
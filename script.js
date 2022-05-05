function createGrid(squaresPerSide) {
    const container = document.querySelector('#container');
    // We remove 2px because of the borders
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
}

function changePixelColor(event) {
    event.target.style.backgroundColor = 'black';
}

createGrid(16);

pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', changePixelColor);
});
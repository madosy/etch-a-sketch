// Create Grid Components
const container = document.querySelector('#grid_container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

// User Input Parameters
let colorSelected = '#8785A2'
let gridSize = 64;

// Resize Grid Squares
let containerWidth = 480;
let squareWidth = containerWidth / gridSize;
let root = document.querySelector(':root');
root.style.setProperty('--sqwidth',`${squareWidth}px`);
root.style.setProperty('--sqheight',`${squareWidth}px`);
root.style.setProperty('--row_width',`${squareWidth*gridSize}px`);

// Assemble Grid
for (let i = 0; i < gridSize; i++) {
    let gridRow = row.cloneNode(true);
    gridRow.setAttribute('id', `r${i}`)
    for (let j = 0; j < gridSize; j++) {
        let clonedSquare = square.cloneNode(true);
        clonedSquare.setAttribute('id', `r${i}c${j}`);
        gridRow.appendChild(clonedSquare);
    }
    container.appendChild(gridRow)
}

const grid = document.querySelectorAll('.square');

grid.forEach((square) => square.addEventListener('mousedown', (theEvent) => {
    
        console.log("start!");
        theEvent.target.style.backgroundColor = colorSelected;
        startDrawing();
    
}));



var startDrawing = function () {
    grid.forEach((square) => square.addEventListener('mouseover', changeColor));
}

var changeColor = function () {
    this.style.backgroundColor = colorSelected;
}

var stopDrawing = function () {
    grid.forEach((square) => square.removeEventListener('mouseover', changeColor))
}

const body = document.querySelector('body');
body.addEventListener('mousedown', (theEvent) => {
    if (theEvent.buttons == 1) {
        console.log('body')
        console.log(colorSelected)
        square.style.backgroundColor = colorSelected;
        startDrawing();
    }
});

body.addEventListener('mouseup', () => {
    console.log('stop!')
    stopDrawing();
});

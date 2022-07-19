let root = document.querySelector(':root');

const container = document.querySelector('#container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

let gridSize = 64;
let containerWidth = 501;
let pixelSize = Math.floor(containerWidth / gridSize * 100) / 100;


root.style.setProperty('--sqwidth',`${pixelSize}px`);
root.style.setProperty('--sqheight',`${pixelSize}px`);
root.style.setProperty('--row_width',`${pixelSize*gridSize}px`);
// square.style.height = `${pixelSize}px`

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
// grid.forEach(square => square.addEventListener('click',console.log(`Hi, I'm ${square.id}`)))

let colorSelected = '#8785A2'

grid.forEach((square) => square.addEventListener('mousedown', (theEvent) => {
    if (theEvent.buttons == 1) {
        console.log("start!");
        theEvent.target.style.backgroundColor = colorSelected;
        startDrawing();
    }
}));
// ));

// grid.forEach((square) => square.addEventListener('mouseup', () => {
//     console.log('stop!')
//     stopDrawing();
// }
// ));

// grid.forEach(square => square.removeEventListener('mouseover'))


var startDrawing = function () {
    grid.forEach((square) => square.addEventListener('mouseover', changeColor));
}

var changeColor = function () {
    // console.log(this.id);
    this.style.backgroundColor = colorSelected;
}

var stopDrawing = function () {
    grid.forEach((square) => square.removeEventListener('mouseover', changeColor))
}

const body = document.querySelector('body');
body.addEventListener('mousedown', (theEvent) => {
    if (theEvent.buttons == 1) {
        console.log('body')
        console.log(square)
        console.log(colorSelected)
        square.style.backgroundColor = colorSelected;
        console.log(square)
        startDrawing();
    }
});

body.addEventListener('mouseup', () => {
    console.log('stop!')
    stopDrawing();
});

// body.addEventListener('mouseover', (e) => console.log(e));
// body.addEventListener('mouseup', (e) => console.log(e));
// body.addEventListener('mousedown', (myEvent) => {
//     console.log(myEvent.buttons);
//     console.log(myEvent.type);
// });
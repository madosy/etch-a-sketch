const container = document.querySelector('#container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

let gridSize = 64;
let containerWidth = 900;
let pixelSize = containerWidth/gridSize;



row.style.width = `${gridSize*pixelSize}px`;
row.style.height = `${pixelSize}px`;
square.style.width = `${pixelSize}px`
square.style.height = `${pixelSize}px`

for (let i=0; i<gridSize; i++){
    let gridRow = row.cloneNode(true);
    gridRow.setAttribute('id', `r${i}`)
    for (let j=0; j<gridSize; j++){
        let clonedSquare = square.cloneNode(true);
        clonedSquare.setAttribute('id', `r${i}c${j}`);
        gridRow.appendChild(clonedSquare);
    }
    container.appendChild(gridRow)
}

const grid = document.querySelectorAll('.square');
// grid.forEach(square => square.addEventListener('click',console.log(`Hi, I'm ${square.id}`)))

let colorSelected = 'red'

grid.forEach((square) => square.addEventListener('mousedown', () => {
    square.style.backgroundColor = colorSelected; 
    startDrawing();
}
));

grid.forEach((square) => square.addEventListener('mouseup', () => {
    console.log('stop!')
    stopDrawing();
}
));

// grid.forEach(square => square.removeEventListener('mouseover'))


var startDrawing = function() {
    grid.forEach((square) => square.addEventListener('mouseover', changeColor));
}

var changeColor = function() {
    console.log(this.id);
    this.style.backgroundColor = colorSelected;
}

var stopDrawing = function() {
    grid.forEach((square) => square.removeEventListener('mouseover', changeColor))
}

// const body = document.querySelector('body');
// body.addEventListener('mouseover', (e) => console.log(e));
// body.addEventListener('mouseup', (e) => console.log(e));
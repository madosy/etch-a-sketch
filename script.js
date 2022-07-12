const container = document.querySelector('#container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

let gridSize = 16;
let containerWidth = 600;
let pixelSize = containerWidth/gridSize;



// row.style.width = `${gridSize*pixelSize}px`;
// row.style.height = `${pixelSize}px`;
// square.style.width = `${pixelSize}px`
// square.style.height = `${pixelSize}px`

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

grid.forEach((square) => square.addEventListener('mousedown', () => {
    startDrawing();
}
));

// grid.forEach(square => square.removeEventListener('mouseover'))


var startDrawing = function() {
    console.log(grid);
    grid.forEach((square) => square.addEventListener('mouseover', () => {
        console.log(square.id);
        square.style.backgroundColor = 'red';
    }));
    // grid.forEach((square) => square.addEventListener('mouseover',))
}

const body = document.querySelector('body');
// body.addEventListener('mousedown', (e) => console.log(e));
// body.addEventListener('mouseup', (e) => console.log(e));
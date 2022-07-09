const container = document.querySelector('#container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

console.log(row.contains);

let gridSize = 16;

for (let i=0; i<gridSize; i++){
    let gridRow = row.cloneNode(true);
    for (let j=0; j<gridSize; j++){
        gridRow.appendChild(square.cloneNode(true))
    }
    container.appendChild(gridRow)
}
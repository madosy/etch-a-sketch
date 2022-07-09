const container = document.querySelector('#container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

console.log(row.contains);


for (let i=0; i<16; i++){
    let gridRow = row;
    for (let j=0; j<16; j++){
        gridRow.appendChild(square)
    }
    container.appendChild(gridRow)
}
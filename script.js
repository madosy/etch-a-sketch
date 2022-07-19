// Create Grid Components
const container = document.querySelector('#grid_container');
const row = document.createElement('div');
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

// User Input Color
let colorSelector = document.getElementById("color_picker");
let colorSelectedOverlay = document.getElementById("selected_color_overlay");
let colorSelected = colorSelector.value; //initial value

function activateRainbowDraw() {
    rainbowMode = true;
    setRandomColor();
    colorSelectedOverlay.style.backgroundColor = colorSelected;
}

function disableRainbowDraw() {
    rainbowMode = false;
    rainbow_overlay.classList.remove("active");
}

colorSelector.addEventListener("input", function () {
    disableRainbowDraw();
    colorSelected = colorSelector.value;
    colorSelectedOverlay.style.backgroundColor = colorSelector.value;
})
colorSelector.addEventListener('click', () => {
    disableRainbowDraw();
})

let rainbow_overlay = document.getElementById("rainbow_overlay");

rainbow_overlay.addEventListener("click", function () {
    rainbow_overlay.classList.toggle("active");
    if (rainbow_overlay.classList.contains("active")) {
        activateRainbowDraw();
    } else {
        disableRainbowDraw();
    }
} )

// Rainbow Mode
let rainbowMode = false;
let randomColorInt;
const getRandomInt = (max) => Math.floor(Math.random() * max)
let lightness;
let saturation;

function setRainbowDefault() {
    lightness = 90;
    saturation = 100;
}

function setRandomColor() {
    randomColorInt = getRandomInt(360);
    colorSelected = `hsl(${randomColorInt},${saturation}%,${lightness}%)`
    if (lightness>0) {
        lightness -= 1;
     } //gradually change to black;
}

// User Input Grid
let gridResizer = document.getElementById("myRange");
let gridSize = gridResizer.value;
gridResizer.addEventListener("input", function() {
    gridSize = gridResizer.value;
    resizeGridSquare();
    updateGridValue()
})

// Resize Grid Squares
let containerWidth = 480;


let squareWidth = containerWidth / gridSize;
let root = document.querySelector(':root');
root.style.setProperty('--sqwidth',`${squareWidth}px`);
root.style.setProperty('--sqheight',`${squareWidth}px`);
root.style.setProperty('--row_width',`${squareWidth*gridSize}px`);

assembleGrid();

function resizeGridSquare() {
    let containerWidth = 480;
    squareWidth = containerWidth / gridSize;
    root.style.setProperty('--sqwidth',`${squareWidth}px`);
    root.style.setProperty('--sqheight',`${squareWidth}px`);
    root.style.setProperty('--row_width',`${squareWidth*gridSize}px`);
    removeGrid();
    assembleGrid();
}

// Assemble Grid
function assembleGrid() {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = row.cloneNode(true);
        // gridRow.setAttribute('id', `r${i}`)
        for (let j = 0; j < gridSize; j++) {
            let clonedSquare = square.cloneNode(true);
            clonedSquare.style.backgroundColor = "#efefef"
            clonedSquare.addEventListener("mousedown", (e) => {
                if (rainbowMode) setRandomColor();
                e.target.style.backgroundColor = colorSelected;
                startDrawing();
        })
            // clonedSquare.setAttribute('id', `r${i}c${j}`);
            gridRow.appendChild(clonedSquare);
        }
        container.appendChild(gridRow)
    }
}

function updateGridValue() {
    let gridValue = document.getElementById("myRange_value");
    gridValue.textContent = `${gridSize} x ${gridSize}`;
}


function removeGrid() {
    const gridForRemove = document.querySelectorAll('.row');
    gridForRemove.forEach((square) => square.remove())
}

var grid = document.querySelectorAll('.square');

grid.forEach((square) => square.addEventListener('mousedown', (theEvent) => {
        theEvent.target.style.backgroundColor = colorSelected;
        startDrawing();
    
}));



var startDrawing = function () {
    grid = document.querySelectorAll('.square');
    grid.forEach((square) => square.addEventListener('mouseover', changeColor));
}

var changeColor = function () {
    if (rainbowMode) setRandomColor();
    this.style.backgroundColor = colorSelected;
    colorSelectedOverlay.style.backgroundColor = colorSelected;
}

var stopDrawing = function () {
    grid.forEach((square) => square.removeEventListener('mouseover', changeColor))
    setRainbowDefault();
}

const body = document.querySelector('body');
body.addEventListener('mousedown', (theEvent) => {
    if (theEvent.buttons == 1) {
        square.style.backgroundColor = colorSelected;
        startDrawing();
    }
});

body.addEventListener('mouseup', () => {
    stopDrawing();
});

let gamePad = document.getElementById("gamepad_container");
let shakeButton = document.getElementById("shakeButton");
shakeButton.addEventListener("click", function(){
    gamePad.classList.add("shake-hard");
    gamePad.classList.add("shake-constant");
    setTimeout(function() {
        gamePad.classList.remove("shake-hard");
        gamePad.classList.remove("shake-constant");
        // gamePad.removeClass("shake-constant");
    },300);
    removeGrid();
    assembleGrid();
})
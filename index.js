const INITIAL_NxN_SIZE = 16;
const INITIAL_COLOR = "#663399";
const INITIAL_MODE = "color";

// Elements
const sketchpad = document.getElementById('sketchpad');
const clearBtn = document.getElementById('clear-btn');
const resizeBtn = document.getElementById('resize-btn');
const sizeInput = document.querySelector('input');
const colorModeBtn = document.getElementById('color-mode-btn');
const randomModeBtn = document.getElementById('random-mode-btn');

// Events
clearBtn.addEventListener('click', clearGrid);
resizeBtn.addEventListener('click', changeSize);
sketchpad.addEventListener('mouseenter', paint);
colorModeBtn.addEventListener('click', changeToColorMode);
randomModeBtn.addEventListener('click', changeToRandomMode);

let currentMode = INITIAL_MODE;

function changeToColorMode() {
    if (currentMode !== "color") {
        currentMode = "color";
        randomModeBtn.classList.remove('active');
        colorModeBtn.classList.add('active');
    }   
    return;
}

function changeToRandomMode() {
    if (currentMode !== "random") {
        currentMode = "random";
        randomModeBtn.classList.add('active');
        colorModeBtn.classList.remove('active');
    }
    return;
}

function generateGrid(size) {
    const squareHeightPixels = `${600/size}px`;
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        row.style.height = squareHeightPixels;
        for (let j = 0; j < size; j++) {
            const col = document.createElement("div");
            col.classList.add('col');
            row.appendChild(col);
        }
        sketchpad.appendChild(row);
    }
}

function clearGrid() {
    const cols = document.querySelectorAll('.col');
    cols.forEach(col => col.style.backgroundColor = "white");
}

function changeSize() {
    const size = parseInt(sizeInput.value);
    if (size > 64 || size < 1 || !Number.isInteger(size)) {
        return;
    }
    sketchpad.replaceChildren();
    generateGrid(size);
}

function generateRandomColor() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}

function paint() {
    const gridSquares = document.querySelectorAll('.col');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', (e) => {
            if (currentMode === "color") {
                e.target.style.backgroundColor = "#663399";
            } else {
                e.target.style.backgroundColor = generateRandomColor();
            } 
        })
    })
}

/// Run app
generateGrid(INITIAL_NxN_SIZE);

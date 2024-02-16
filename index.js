const INITIAL_SIZE = 9;

const sketchpad = document.getElementById('sketchpad');
console.log(sketchpad);

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        row.style.height = `${600/size}px`;
        sketchpad.appendChild(row);
    }
    for (let i = 0; i < size; i++) {
        const rows = document.querySelectorAll('.row');
        console.log(rows);
        rows.forEach(row => {
            const col = document.createElement("div");
            col.classList.add('col');
            col.style.width = `${600/size}px`;
            row.appendChild(col);
        })
    }
}

generateGrid(INITIAL_SIZE);

function cleanGrid() {
    sketchpad.replaceChildren();
}

function paint() {
    const items = document.querySelectorAll('.col');
    items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#663399';
        })
    })
}

function changeSize() {
    const size = parseInt(sizeInput.value);
    cleanGrid();
    generateGrid(size);
    console.log(size)
}

const sizeInput = document.querySelector('input');
const changeBtn = document.getElementById('changebtn');

changeBtn.addEventListener('click', changeSize);
sketchpad.addEventListener('mouseenter', paint);
// Create 16x16 square grid
let container = document.querySelector('div');

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < num; j++) {
      const div = document.createElement('div');
      div.classList.add('square');
      div.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomRgbValue();
      })
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}

function removeGrid() {
  while (container.firstChild) {
    let square = container.firstChild;
    container.removeChild(square);
  }
}

function promptGridChange() {
  let num = prompt("Number of squares per side of grid", 16);
  if (num > 100 || num < 1) {
    promptGridChange();
  } else {
    removeGrid();
    createGrid(num);
  }
}

function getRandomNumFromZeroTo(num) {
  return Math.floor(Math.random() * (num + 1));
}

function getRandomRgbValue() {
  return `rgb(${getRandomNumFromZeroTo(255)}, 
              ${getRandomNumFromZeroTo(255)},
              ${getRandomNumFromZeroTo(255)})`;
}

// 'Reset' button to reset square colors
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = 'black');
});

// 'Change Grid Size' button
let change = document.querySelector('button');
change.addEventListener('click', () => promptGridChange());

createGrid(16);
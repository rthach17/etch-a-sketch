// Create 16x16 square grid
let container = document.querySelector('div');

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    for (let j = 0; j < num; j++) {
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('square');
      squareDiv.style.width = `${(400 / num)}px`;
      squareDiv.style.height = `${(400 / num)}px`;
      squareDiv.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomRgbValue();
      })
      columnDiv.appendChild(squareDiv);
    }
    container.appendChild(columnDiv);
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
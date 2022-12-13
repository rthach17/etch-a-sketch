// Create 16x16 square grid
let container = document.querySelector('div');

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    for (let j = 0; j < num; j++) {
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('square');
      squareDiv.addEventListener('mouseover', function() {
        this.classList.add('hover');
      })
      columnDiv.appendChild(squareDiv);
    }
    container.appendChild(columnDiv);
  }
}

// Reset button to reset square colors
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => square.classList.remove('hover'));
});

createGrid(8);
let container = document.querySelector('div');

// Create 16x16 square grid
for (let i = 0; i < 16; i++) {
  const columnDiv = document.createElement('div');
  columnDiv.classList.add('column');
  for (let j = 0; j < 16; j++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareDiv.addEventListener('mouseover', function() {
      this.classList.add('hover');
    })
    columnDiv.appendChild(squareDiv);
  }
  container.appendChild(columnDiv);
}

// Reset square colors
let reset = document.querySelector('button');
reset.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => square.classList.remove('hover'));
});
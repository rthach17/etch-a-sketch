let container = document.querySelector('div');

for (let i = 0; i < 16; i++) {
  const columnDiv = document.createElement('div');
  columnDiv.classList.add('column');
  for (let j = 0; j < 16; j++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    columnDiv.appendChild(squareDiv);
  }
  container.appendChild(columnDiv);
}
let container = document.querySelector('div');

for (let index = 0; index < 16; index++) {
  const div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
}
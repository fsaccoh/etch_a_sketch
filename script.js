// Holder creation
const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);
const holder = document.querySelector('div');
holder.id = 'holder'

// 16x16 Grid creation
function gridCreation(side=16) {
  for (let index = 1; index <= (side*side); index++) {
    const grid = document.createElement('div');
    grid.id = index;
    grid.className = 'grid';
    holder.appendChild(grid);
  }
  holder.style.gridTemplate = 'repeat(' + side + ', 1fr) / repeat(' + side + ', 1fr)'
}

// Grid destruction
function gridDestruction() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach( grid => {
    holder.removeChild(grid);
  });
}

// drawing lines
function drawLines() {  
  const draw = document.querySelectorAll('.grid')

  function changeColor(e, color) {
    e.target.style.backgroundColor = color;
    e.target.style.borderColor = color;
  }

  draw.forEach(square => {
    square.addEventListener('mouseover', (e) => changeColor(e, '#454545'));
  });
}

// cleaning
function blankAll() {
  const draw = document.querySelectorAll('.grid')
  draw.forEach(square => {
    square.style.backgroundColor = '';
  });
  const side = prompt('How many sides? (1 - 64)', 16);
  gridDestruction();
  gridCreation(side);
  drawLines();
}

// Initialization
gridCreation();
drawLines();
const reload = document.querySelector('#reload');
reload.addEventListener('click', blankAll);
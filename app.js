const board = document.querySelector('#board')
const colorList = document.querySelector('#color-list');
const colors = [['#FFCCFF', '#FF99FF', '#FF66FF', '#FF33FF', '#FF00FF', '#CC3399'], ['#0000FF', '#3366CC', '#3366FF', '#6699FF', '#000099'], ['#FFFF00', '#FF0033','#FF00FF','#660099', '#0033CC', '#0099CC', '#33CCCC', '#00CC66', '#339900', '#666633']];
const SQUARES_NUMBERS = 400

let colorIdx = 0

for(let i = 0; i < SQUARES_NUMBERS; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', ()=>
      setColor(square))
    square.addEventListener('mouseleave', ()=>
    removeColor(square))  
      board.append(square)
}

colorList.addEventListener('click', (event) => {
	if (event.target.classList.contains('color-btn')) {
		colorIdx = parseInt(event.target.getAttribute('data-time'));
		// console.log(`colorIdx`, colorIdx)
	}
});

function setColor(element){
    const color = getRandomColor(colorIdx)
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(col = 0){
    const index = Math.floor(Math.random() * colors[col].length)
    
return colors[col][index]
}
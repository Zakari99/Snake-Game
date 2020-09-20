import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
const EXPANSION_RATE = 2;

export function update() {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = getRandomFoodPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
	let newFoodPosition;
	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}

/* above fn means: while newFoodPosition is empty i.e no food on the screen || 
 the food is already on the snake i.e eaten, newFoodPosition = randomGridPosition*/

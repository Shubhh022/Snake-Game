import { randomPosition } from "./utils.js";

export function createFood(snake, rows, columns) {
    let food;

    do {

        food = randomPosition(rows, columns);

        // Ensure that the food does not spawn on the snake's body
    } while (
        snake.some(
            segment =>
                segment.x === food.x &&
                segment.y === food.y
        )
    );

    return food;
}
import { Snake } from './snake.js';
import { createFood } from './food.js';

export class Game {

    constructor() {

        this.rows = 20;
        this.columns = 20;

        this.snake = new Snake();

        this.speed = 400;

        this.direction = "RIGHT";
        this.nextDirection = "RIGHT";

        this.running = true;

        // Create food
        this.food = createFood(
            this.snake.getBody(),
            this.rows,
            this.columns
        );
    }

    setDirection(direction) {

        const opposite = {
            UP: "DOWN",
            DOWN: "UP",
            LEFT: "RIGHT",
            RIGHT: "LEFT"
        };

        // Prevent snake from moving directly backward
        if (opposite[this.direction] === direction) {
            return;
        }

        this.nextDirection = direction;
    }

    // Update the game state
    update() {

        if (this.running === false) {
            return;
        }

        // Apply the next direction
        this.direction = this.nextDirection;

        const movement = {

            UP: {
                x: 0,
                y: -1
            },

            DOWN: {
                x: 0,
                y: 1
            },

            LEFT: {
                x: -1,
                y: 0
            },

            RIGHT: {
                x: 1,
                y: 0
            }
        };

        const head = this.snake.getHead();

        const newHead = {
            x: head.x + movement[this.direction].x,
            y: head.y + movement[this.direction].y
        };

        this.snake.move(newHead);

        this.snake.removeTail();
    }
}
export function wallCollision(head, rows, columns) {

    return (
        head.x < 0 ||
        head.x >= columns ||
        head.y < 0 ||
        head.y >= rows
    );
}

export function bodyCollision(head, snake) {

    // Check if the head of the snake collides with any segment of its body
    /* 
    some() : This method tests whether at least one element in the array passes the test 
    implemented by the provided function. It returns a Boolean value: true if the 
    callback function returns a truthy value for at least one element in the array;
     otherwise, false.
    many(), every()
    */
    return snake.some(
        segment =>
            segment.x === head.x &&
            segment.y === head.y
    );

}

export function foodCollision(head, food) {

    return (
        head.x === food.x &&
        head.y === food.y
    );

}

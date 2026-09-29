export function randomPosition(rows, columns) {

    return {
        //Math.random() : returns pseudo-random number bwtween 0 and 1, excluding 1
        x: Math.floor(
            Math.random() * columns
        ),

        y: Math.floor(
            Math.random() * rows
        )

    };

}

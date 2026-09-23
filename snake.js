export class Snake {

    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 },
        ];
    }
     getHead() {
        return this.body[0];
    }

    move(newHead) {
        return this.body.unshift(newHead);
    }

    removeTail() {
        return this.body.pop();
    }

    grow(newHead) {
        this.body.unshift(newHead);
    }
    getBody() {

        return this.body;

    }
}

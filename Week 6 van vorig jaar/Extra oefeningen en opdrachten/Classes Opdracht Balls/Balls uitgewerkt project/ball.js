class Ball {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }

    xDirection = 1;
    yDirection = 1;
    speed = 50;
    isActive = true;

    setRandomDirection() {
        this.xDirection = random(-1, 1);
        this.yDirection = random(-1, 1);
    }

    update() {
        if (this.x + this.size / 2 >= width) {
            this.xDirection *= -1;
            this.x--;
        }
        else if (this.x <= this.size / 2) {
            this.xDirection *= -1;
            this.x++;
        }

        if (this.y + this.size / 2 >= height) {
            this.yDirection *= -1;
            this.y--;
        }
        else if (this.y <= this.size / 2) {
            this.yDirection *= -1;
            this.y++;
        }

        this.x += this.xDirection * deltaTime / 1000 * this.speed;
        this.y += this.yDirection * deltaTime / 1000 * this.speed;
    }

    display() {
        if (this.isActive) {
            fill(this.color);
            circle(this.x, this.y, this.size);
        }
    }

    onClick(x, y) {
        console.log("on click");
        if (this.isActive) {
            if (dist(this.x, this.y, x, y) < this.size / 2) {
                this.isActive = false;
                return true;
            }
        }
        return false;
    }
}
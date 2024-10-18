class ButtonOpdracht {
    constructor(text, x, y, width, height) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    clicked = false;
    onClick = function () { };

    display() {
        if (mouseIsPressed && !this.clicked) {
            if (this.containsMousePosition()) {
                this.clicked = true;
                this.onClick();
            }
        }
        else if (!mouseIsPressed) {
            this.clicked = false;
        }

        rect(this.x, this.y, this.width, this.height);
        textAlign(CENTER, CENTER);
        text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }


    containsMousePosition() {
        if (mouseX > this.x && mouseX < this.x + this.width &&
            mouseY > this.y && mouseY < this.y + this.height) {
            return true;
        }
        return false;
    }
}




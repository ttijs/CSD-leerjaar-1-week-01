class Button {

    constructor(text, x, y, width, height) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    isActive = true;
    activeColor = color(230);
    hoverColor = color(255);
    clickColor = color(100);
    inactiveColor = color(40);
    textColor = color(0);

    isClicked = false;
    onClick = function(){};

    setOnClick(onClick){
        this.onClick = onClick;
    }

    display() {
        //Clicking
        if (this.isActive) {
            if (mouseIsPressed && !this.isClicked) {
                if (this.containsMousePosition()) {
                    this.isClicked = true;
                    this.onClick();
                }
            }
            else if (!mouseIsPressed && this.isClicked) {
                this.isClicked = false;
            }

            //Hovering
            if (this.containsMousePosition()) {
                if (mouseIsPressed) {
                    fill(this.clickColor);
                }
                else {
                    fill(this.hoverColor);
                }
            }
            else {
                fill(this.activeColor);
            }
        }
        else{
            fill(this.inactiveColor);
        }

        //Drawing
        rect(this.x, this.y, this.width, this.height);
        fill(this.textColor);
        textAlign(CENTER, CENTER);
        text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }

    setActive(isActive) {
        this.isActive = isActive;
    }

    containsMousePosition() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            return true;
        }
        return false;
    }
}
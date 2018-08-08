interface Shape {
    draw();
}

class Circle implements Shape {
    draw() {
        // draw the circle
    }
}

enum ColorList {
    red,
    green,
    blue,
    yellow
}

class Color { 
    constructor(private shape: Shape, private color: ColorList){}

    draw(){
        // draw the colored circle
    }
}

let circle = new Color(new Circle(), ColorList.red)
circle.draw()
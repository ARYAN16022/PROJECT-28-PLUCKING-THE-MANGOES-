class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction:1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("sprite/mango.png");
        World.add(world, this.body);
    }
    display() {
     var pos = this.body.position;
    imageMode(RADIUS);
    fill("yellow");
    image(this.image, pos.x, pos.y, this.radius, this.radius);   
    }
}


class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 10 
        }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
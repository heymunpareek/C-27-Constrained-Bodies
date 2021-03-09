class Chain {
    constructor(bodya, bodyb) {
        var op={
            bodyA: bodya,
            bodyB: bodyb,
            stiffness: 0.1,
            length: 1
            

            
        }
        this.link = Matter.Constraint.create(op);
        World.add(world,this.link);
    }
    display() {
        var pa = this.link.bodyA.position
        var pb = this.link.bodyB.position

        strokeWeight(3);
        line(pa.x,pa.y,pb.x,pb.y);
    }
}
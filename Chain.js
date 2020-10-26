class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.SlingShot = Constraint.create(options);
        World.add(world, this.chain);
    }
    
          display(){
        var pointA = this.chain.bodyA.position;
        var pointb = this.pointB;
        strokeWeight(4); 
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
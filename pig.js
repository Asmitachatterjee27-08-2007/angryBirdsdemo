class Pig{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:1.2,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("green");
        stroke("blue");
        strokeWeight(4);
        rect(0,0,50,50);
        pop();
    }
}
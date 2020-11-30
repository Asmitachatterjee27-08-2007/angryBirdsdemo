class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:0.8,
            friction:1.5,
            density:1
        }
        this.body=Bodies.rectangle(x,y,20,height,options);
        this.height=height;
        Matter.Body.setAngle(this.body, angle);

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("pink");
        stroke("violet");
        strokeWeight(4);
        rect(0,0,20,this.height);
        pop();
    }
}
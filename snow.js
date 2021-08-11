class Snow{
    constructor(x,y,r){
        var opt={

        restitution: 0.8,
        density: 1
        }
        this.body = Bodies.circle(x,y,r,opt)
        World.add(world,this.body);
        this.r=r;
        this.img = loadImage("snow4.webp")
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,10)})
        }
    }
    display(){
        push();
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        noStroke();
        fill(255);
       // image(this.img,0,0,10,10);
       ellipse(0,0,this.r);
        pop();
    }
}
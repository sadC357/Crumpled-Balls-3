class Trashcan {
  constructor(x, y, width, height) {
    this.image=loadImage("trashcan.png");
    var options = {
        'restitution':0,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
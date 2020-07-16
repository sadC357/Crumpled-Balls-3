var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	ground = new Ground (200,400,2000,20);
	paper = new Paper (150,300,10,10);
	box1 = new Trashcan (packageBody.position.x, packageBody.position.y,175,20);
  	box2 = new Trashcan (packageBody.position.x+100, packageBody.position.y+100,20,100);
	box3 = new Trashcan (packageBody.position.x-100, packageBody.position.y-100,20,100);
	launcher = new Launcher (paper.body,{x:200,y:100});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  launcher.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
       Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-13});
     }
   }

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}
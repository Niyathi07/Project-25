
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var paper;
var ground;
var dustbin;






function preload()
{
  

	
}



function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Log(600,390,1200,5);
  

  paper = new Paper(200,370,40);


  dustbin = new Dustbin(1050,310,150,190);
  
  

  Engine.run(engine);

  
  
}


function draw() {
   background(250);

   rectMode(CENTER);
   
   Engine.update(engine)

   paper.display();
   ground.display();
   dustbin.display();
   
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body, paper.body.position, {x:130,y:-150})
}

}




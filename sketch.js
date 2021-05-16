
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{

}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = createSprite(280, 600, 50, 50);
	bobObject2 = createSprite(340, 600, 50, 50);
	bobObject3 = createSprite(400, 600, 50, 50);
	bobObject4 = createSprite(460, 600, 50, 50);
	bobObject5 = createSprite(520, 600, 50, 50);

	roof = createSprite(400, 200, 280, 20)
	rope1 = new Rope(bobObject1.body, roof.body, 50*2, 0)
	rope2 = new Rope(bobObject2.body, roof.body, 50*2, 0)
	rope3 = new Rope(bobObject3.body, roof.body, 50*2, 0)
	rope4 = new Rope(bobObject4.body, roof.body, 50*2, 0)
	rope5 = new Rope(bobObject5.body, roof.body, 50*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




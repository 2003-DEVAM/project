var  wasteSprite;
var wasteBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);
	rectMode(CENTER);
	

	wasteSprite=createSprite(width/2, 80, 20,20);
	

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	box1=createSprite(800,height-50,120,20)
	box1.shapeColor=color("purple");

	box2=createSprite(850,height-80,20,80)
	box2.shapeColor=color("purple");

	box3=createSprite(750,height-80,20,80)
	box3.shapeColor=color("purple");

	engine = Engine.create();
	world = engine.world;

	wasteBody = Bodies.circle(200 , 1000 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, wasteBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wasteSprite.x= wasteBody.position.x 
  wasteSprite.y= wasteBody.position.y 
  box1.display();
  box2.display();
  box3.display();
  wasteSprite.collide(box1);
  wasteSprite.collide(box2);
  wasteSprite.collide(ground);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(wasteSprite.body,wasteSprite.body.postition,{x:85,y:85}); 
		
    }
    
  }
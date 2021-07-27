const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
		isStatic:true
	}

	roof = Bodies.circle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(415, 300, 25, bob_options);
	World.add(world, bob1);

	bob2 = Bodies.circle(465, 300, 25, bob_options);
	World.add(world, bob2);

	bob3 = Bodies.circle(515, 300, 25, bob_options);
	World.add(world, bob3);

	bob4 = Bodies.circle(565, 300, 25, bob_options);
	World.add(world, bob4);

	bob5 = Bodies.circle(615, 300, 25, bob_options);
	World.add(world, bob5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x, bob1.position.y, 25);
  ellipse(bob2.position.x, bob2.position.y, 25);
  ellipse(bob3.position.x, bob3.position.y, 25);
  ellipse(bob4.position.x, bob4.position.y, 25);
  ellipse(bob5.position.x, bob5.position.y, 25);
  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

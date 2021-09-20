
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	treeImg=loadImage("sprite/tree.png")
	bgImg = loadImage("sprite/garden.jpg")
	boyImg = loadImage("sprite/boy.png");
}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground1 = new ground(500, 625, 950, 70);
  stone1 = new stone(90, 450, 40);
  
  mango1 = new Mango(650, 290, 23);
  mango2 = new Mango(750, 290, 34);
  mango3 = new Mango(800, 290, 25);
  mango4 = new Mango(850, 290, 35);
  mango5 = new Mango(700, 340, 47);
  mango6 = new Mango(770, 190, 34);
  mango7 = new Mango(950, 250, 34);
  mango8 = new Mango(850, 340, 33);
  mango9 = new Mango(850, 190, 35);
  mango10 = new Mango(900, 290, 36);

  attach = new Throw(stone1.body, { x: 100, y: 480 });

  tree2 = createSprite(775, 344);
  tree2.addImage(treeImg);
  tree2.scale = 0.42;

  boy = createSprite(160, 550);
  boy.addImage(boyImg);
  boy.scale = 0.125;
  
  
 
	
  
//  tree1 = new tree(775, 368, 400, 450);


  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
	stone1.display();
  ground1.display();

  fill("black")
  text("PRESS SPACE TO GET ANOTHER CHANCE TO PLAY", 20, 40)
  
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);
  
 // tree1.display();

  attach.display();
  drawSprites();
 	mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}
function mouseDragged() {
  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  attach.fly();
}

function detectCollision(lstones,lmango) {
  if (lstones.body.position.x - lmango.body.position.x < lmango.radius + lstones.radius &&
    lmango.body.position.x - lstones.body.position.x < lmango.radius + lstones.radius &&
    lstones.body.position.y - lmango.body.position.y < lmango.radius + lstones.radius &&
    lmango.body.position.y-lstones.body.position.y<lmango.radius+lstones.radius) {
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed()
{
  if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, { x: 100, y: 480 });
    attach.Launch(stone1.body);
  }
}
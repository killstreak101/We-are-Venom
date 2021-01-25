const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var engine, world;
var bg;
var venom,chain,bomb;
var enemy1, enemy2 , enemy3, enemy4, enemy5;
var platform1, platform2, platform3,platform4, platform5, platformhero,platformimg;
var count = 0;
var score=0;



function preload(){

bg = loadImage("bg.jpg");
platformimg = loadImage("platform2.png");

 


}

function setup(){
createCanvas(1525,715);
engine = Engine.create();
    world = engine.world;

platform1 = new Platform(900,600,130,100);
platform2 = new Platform(700,350,130,100);
platform3 = new Platform(1400,500,130,100);
platform4 = new Platform(1100,400,130,100);
platform5 = new Platform(550,600,130,100);

venom = new Venom(150,270);

bomb = new Bomb(220,280,40);

chain = new Chain(bomb.body,{x:220, y:290});

enemy1 = new Enemy(570,480,150,230,"enemy1.png");
enemy2 = new Enemy(700,240,180,250,"enemy2.png");
enemy3 = new Enemy(900,470,150,250,"enemy3.png");
enemy4 = new Enemy(1110,280,150,250,"enemy4.png");
enemy5 = new Enemy(1400,295,150,300,"enemy5.png");



var platformhero_option = {
    isStatic : true
}
// platformhero= Bodies.rectangle(500,350,200,200,platformhero_option);
// World.add(world,platformhero);


}

function draw(){
background(bg);
Engine.update(engine);

noStroke();
textSize(35)
fill("white")
text("Score  " + score, width-300, 50)


platform1.display();
platform2.display();
platform3.display();
platform4.display();
platform5.display();





imageMode(CENTER);
image(platformimg,140,450,400,400);

venom.display();
bomb.display();

chain.display();

enemy1.display();
enemy5.display();
enemy2.display();
enemy4.display();
enemy3.display();

enemy1.score();
enemy5.score();
enemy2.score();
enemy4.score();
enemy3.score();

console.log(enemy1.body.speed);
console.log(enemy2.body.speed);
console.log(enemy5.body.speed);
console.log(enemy4.body.speed);
console.log(enemy3.body.speed);

}


function mouseDragged(){
    Matter.Body.setPosition(bomb.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    if(count<4){
      count++;
      Matter.Body.setPosition(bomb.body,{x:220, y:290});
      chain.attach(bomb.body);
    }
   
  }
}



















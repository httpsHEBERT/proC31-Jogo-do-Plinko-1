Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup(){

  createCanvas(windowWidth-16, windowHeight-16);
  engine = Engine.create();
  world = engine.world;

  roof = new Ground(width/2, 0, width, 10);
  wall1 = new Ground(0, height/2, 10, height);
  wall2 = new Ground(width, height/2, 10, height);
  ground = new Ground(width/2, height, width, 20);

  //objetos de divisão
  for (var k = -5; k <= width; k += 80){
    noStroke();
    divisions.push(new Division(k, height, 10, divisionHeight));
  }

  //1ª linha de objetos plinko
  for (var j = 50; j <= width-20; j += 50){ 
    plinkos.push(new Plinko(j, 55));
  }

  //2ª linha de objetos plinko
  for (var j = 25; j <= width-10; j += 50){
    plinkos.push(new Plinko(j, 155));
  }

  //3ª linha de objetos plinko
  for (var j = 50; j <= width-20; j += 50){ 
    plinkos.push(new Plinko(j, 255));
  }

  //4ª linha de objetos plinko
  for (var j = 25; j <= width-10; j += 50){
    plinkos.push(new Plinko(j, 355));
  }

  //objetos de partículas
  if(frameCount % 60 == 0){
    particles.push(new Particle(random(width-width+50, width-50), 10, 10));
  }
}

function draw(){

  background("#153152");
  Engine.update(engine);
  display();
}

function display(){

  roof.display();
  wall1.display();
  wall2.display();
  ground.display();

  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();   
  }
   
  //exibir os divisões
  for (var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }

  //exibir as partículas
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  if(frameCount % 60 == 0){
    particles.push(new Particle(random(width-width+20, width-20), 10, 10));
  }
}
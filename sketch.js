const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var img;
var a1=0;
let click=0;
var Birds = 6;
var bird01;
window.onmousedown = () => {  
    click=1 
    if (click===1) {  
      console.log('mouse button down')  
      
    }  
  }  
  window.onmouseup = () => {  
    click=0
    if (click===0) {  
      console.log('mouse button up')  
    }  
  }
function preload() {
    getTime();
     img=loadImage=("sprites/bg2.png")
     bird01=loadImage=("sprites/bird.png")
}

function setup(){
alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    var canvas = createCanvas(1360,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(680,height,1360,20);
    platform = new Ground(150, 460, 500, 380);
    
    

    bird = new Bird(350,150);

    //Enter objects here
    //boxX = new Box(100,100,100,100);
    //logX = new Log(100,100,100,PI);
    //pigX = new Pig(100,100);
    box1 = new Box(700,550,200,200)
    box2 = new Box(700,350,200,200)
    box3 = new Box(1000,550,200,200)
    box4 = new Box(1000,350,200,200)
    box5 = new Box(850,550,100,100)
    box6 = new Box(850,350,100,100)
    log1 = new Log(850,100,500,PI/2)
    pig1 = new Pig(850,450)
    pig2 = new Pig(850,250)

    bird1 = new Bird(300,150);
    bird2 = new Bird(250,100);
    bird3 = new Bird(200,50);
    bird4 = new Bird(150,0);
    bird5 = new Bird(100,-50);
    bird6 = new Bird(50,-100);
    slingshot = new SlingShot(bird.body,{x:350, y:100});
}

function draw(){
    background("blue")
    
    
    Engine.update(engine);
    //strokeWeight(4);
    textSize(40);
    text("Birds Left : "+Birds,50,55);
    ground.display();
   
    

    bird.display();
    platform.display();

    //Enter object display here
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    log1.display();
    pig1.display();
    pig2.display();

    slingshot.display();

    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    bird6.display();

    if(a1===0 && mouseX<500 && click===1 && Birds===6){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===5){
        Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===4){
        Matter.Body.setPosition(bird2.body, {x: mouseX , y: mouseY});
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===3){
        Matter.Body.setPosition(bird3.body, {x: mouseX , y: mouseY});
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===2){
        Matter.Body.setPosition(bird4.body, {x: mouseX , y: mouseY});
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===1){
        Matter.Body.setPosition(bird5.body, {x: mouseX , y: mouseY});
    }  
    if(a1===0 && mouseX<500 && click===1 && Birds===0){
        Matter.Body.setPosition(bird6.body, {x: mouseX , y: mouseY});
    }  
    
}




function mouseReleased(){
    if(mouseX<500){
        slingshot.fly();
        a1=1;
    }
}
function keyPressed(){
    if(keyCode===32 && Birds>=1 && Birds===6){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        //Matter.Body.setPosition(bird1.body,{x:350,y:100});
    slingshot.attach(bird1.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===5){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        //Matter.Body.setPosition(bird1.body,{x:350,y:100});
    slingshot.attach(bird2.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===4){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        //Matter.Body.setPosition(bird1.body,{x:350,y:100});
    slingshot.attach(bird3.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===3){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        //Matter.Body.setPosition(bird1.body,{x:350,y:100});
    slingshot.attach(bird4.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===2){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        //Matter.Body.setPosition(bird1.body,{x:350,y:100});
    slingshot.attach(bird5.body);
    a1=0
    }
    else if(keyCode===32 && Birds>=1 && Birds===1){
        Birds = Birds-1;
        bird.trajectory=[];
        bird1.trajectory=[];
        bird2.trajectory=[];
        bird3.trajectory=[];
        bird4.trajectory=[];
        bird5.trajectory=[];
        //Matter.Body.setPosition(bird1.body,{x:350,y:100});
    slingshot.attach(bird6.body);
    a1=0
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}

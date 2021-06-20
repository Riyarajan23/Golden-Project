var sp1,sp2,bg,space
var b1,b2,b3,sp1img
var a1,a2,a3,sp2img
var line
var obs1g,obs2g,as1g,as2g
var m1,m2,m3
var asimg
var score1=0
var score2=0
var fl,flimg
var start=1
var play=2
var end=0
var gameState=start 
var gameoverimg,restartimg,gameover,restart
var s=0
function preload(){
bg=loadImage("space1bg.jpg");
sp1img=loadAnimation("b1.png","b1.png","b3.png","b3.png","b2.png","b2.png")
sp2img=loadAnimation("a1.png","a1.png","a3.png","a3.png","a2.png","a2.png")
obsimg=loadAnimation("m1.PNG","m2.PNG","m3.PNG")
asimg=loadAnimation("as1.PNG","as2.PNG","as3.PNG")
gameoverimg=loadImage("game over.jpg")
restartimg=loadImage("restart.png")

}

function setup() {

  createCanvas(1200,1800);
  //space=createSprite(300,300,800,1000);
  //space.addImage(bg);
  //space.velocityY=2;
  line=createSprite(600,900,10,1800)
  line.shapeColor="white";
  sp1=createSprite(300,1700, 50, 50);
  sp1.addAnimation("space1",sp1img)
  sp1.scale=0.7;
  sp2=createSprite(900,1700, 50, 50);
  sp2.addAnimation("space2",sp2img)
   sp2.scale=0.7;
   fl=createSprite(600,10,1200,20)
  fl.shapeColor="yellow"
   gameover=createSprite(600,400,100,100)
   restart=createSprite(600,550,100,100)
   gameover.addImage(gameoverimg)
   gameover.scale=0.3;
   restart.addImage(restartimg)
   restart.scale=0.5;
   gameover.visible=false
   restart.visible=false

  
  
obs1g=new Group ()
obs2g=new Group ()
as1g=new Group ()
as2g=new Group ()

}

function draw() {
  background(bg);
  drawSprites();
  //if (space.y>500){
//space.y=300
 // }
 if (gameState===play){
  
gameOver.visible=false
restart.visible=false

  if (keyDown("w")){
    sp1.y=sp1.y-2.5
  }
  if (keyDown("a")){
    sp1.x=sp1.x-2
  }
  if (keyDown("d")){
    sp1.x=sp1.x+2
  }

  if (keyDown("i")){
    sp2.y=sp2.y-2.5
  }
  if (keyDown("j")){
    sp2.x=sp2.x-2
  }
  if (keyDown("l")){
    sp2.x=sp2.x+2
  }
if (sp1.isTouching(line)||sp2.isTouching(line)){
  sp1.bounceOff(line)
  sp2.bounceOff(line)
}
/*if (sp1.isTouching(obs1g)){
  obs1g.destroyEach()
  sp1.destroy()
}
if (sp2.isTouching(obs2g)){
  obs2g.destroyEach()
  sp2.destroy()
}*/
if (sp1.isTouching(as1g)){
  as1g.destroyEach()
  score1=score1+5
}
if (sp2.isTouching(as2g)){
  as2g.destroyEach()
  score2=score2+5
}
meteors ()
meteors2 ()
astro1 ()
astro2 ()
if (sp1.isTouching(fl)||sp2.isTouching(fl)){
  //gameState=end
  fill("white")
  if (sp1.isTouching(fl)){
    text("Spaceship 1 is the WINNER",400,600)
    s=1
    gameState=end
  }
  if (sp2.isTouching(fl)){
    text("Spaceship 2 is the WINNER",400,600)
    s=2
    gameState=end
  }
  if (sp1.isTouching(fl)&&sp2.isTouching(fl)){
    if (score1>score2){
text("Spaceship 1 is the WINNER",400,600)
s=3
gameState=end
    }
    if (score2>score1){
 text("Spaceship 2 is the WINNER",400,600)
 s=4
 gameState=end
     }
else {
  s=5
  text("Spaceship 1 and 2 are the WINNERS",400,600)
}
  }
  //gameState=end 
}
//if (sp1.isTouching(fl)&&sp2.isTouching(fl)){
//gameState=end


}
 if (gameState===end){
  
   
  fill ("white")
  textSize(25)
//text("Press 'R' To Restart",400,300)
gameover.visible=true
restart.visible=true

obs1g.destroyEach()
obs2g.destroyEach()
as1g.destroyEach()
as2g.destroyEach()
if (s===1){
text("Spaceship 1 is the WINNER",400,200)

}
if (s===2){
  text("Spaceship 2 is the WINNER",400,200)
  
  }
  if (s===3){
    text("Spaceship 1 is the WINNER",400,200)
    
    }
    if (s===4){
      text("Spaceship 2 is the WINNER",400,200)
      
      }
      if (s===5){
        text("Spaceship 1 and 2 are the WINNERS",400,200)
        
        }
 }
   
   fill ("white")
   textSize(25)
   text("Score: "+score1,50,40)
   text("Score: "+score2,1050,40)
if (mousePressedOver(restart)&&gameState===end){
  gameState=start;

  score1=0
  score2=0
  sp1.x=300
  sp1.y=1700
  sp2.y=1700
  sp2.x=900
}


if (gameState===start){
  background("cyan")
  fill("black")
  textSize(45)
  text("SPACE BATTLE",400,100)
  textSize(30)
  text("Try to save the astronauts!",400,300)
  text("but try not to be killed ",400,400)
  text("Try to reach to the base before your opponents ",400,500)
  text("PRESS 'S' TO START ",400,600)
  if (keyDown("s")){
    gameState=play
    
  }
}

}
function meteors(){
if (frameCount%100===0){
  var obs=createSprite(random(20,580),0,40,40)
  obs.velocityY=3
 // obs.shapeColor="red"
  obs.addAnimation("falling",obsimg)
    obs.scale=1.25
  obs.lifetime=700
  obs1g.add (obs)
}
}

function meteors2(){
  if (frameCount%100===0){
    var obs=createSprite(random(620,1180),0,50,50)
    obs.velocityY=3
    //obs.shapeColor="red"
    obs.addAnimation("falling",obsimg)
    obs.scale=1.25
    obs.lifetime=700
    obs2g.add (obs)
  }
  }


  function astro1 (){
    if (frameCount%130===0){
      var astro=createSprite(random(20,580),0,30,30)
      astro.addAnimation("as1",asimg)
      astro.scale=0.5
      astro.velocityY=5
      astro.shapeColor="yellow"
      astro.lifetime=700
      as1g.add(astro)
    }
  }

  function astro2 (){
    if (frameCount%130===0){
      var astro=createSprite(random(620,1180),0,30,30)
      astro.addAnimation("as2",asimg)
      astro.scale=0.5
      astro.velocityY=5
      astro.shapeColor="yellow"
      astro.lifetime=700
      as2g.add(astro)
    }
  }
 
 var roketGroup, missileGroup, spaceGroup,stoneGroup;
 var roketImage, missileImage ,stoneImage, spaceImage,gameoverImage;
 var gameover;
 var stone2Image,stone2Group;
 var roket,missile,stone,stone2;
  
var PLAY;
var END;
gameState = 1;
 
 var score =0;
 function preload(){
   
   spaceImage = loadImage("space.jpg");
   missileImage = loadImage("missile1.png");
   roketImage = loadImage("roket.png");
   stoneImage = loadImage("stone2.jpg");
   gameoverImage = loadImage("gameover.jpg")
   stone2Image=loadImage("stone.jpg");
    
   
  
 }
 
 
 
 function setup() {
   createCanvas(windowWidth,windowHeight);
   
    
  space = createSprite(width/2,200);
  space.addImage("hlo5",spaceImage);
  space.scale = 5;
  space.velocityY =8;
   
   
  roket = createSprite(190,600,0,0);
  roket.addImage("hlo",roketImage); 
  roket.scale = 0.3;
  //roket.debug = true;
  roket.setCollider("RECTANGLE" ,100,100)
   
    
  gameover = createSprite(width/2,height/2);
  gameover.addImage(gameoverImage);
  gameover.visible = false;


   stoneGroup = new Group();
   stone2Group = new Group();
   spaceGroup = new Group();

   missileGroup = new Group();
  
   
 }

 function createmissile() {
  var missile= createSprite(100, 600, 60, 10);
  missile.addImage(missileImage);
  //missile.x = 190;
  missile.x=roket.x;

  missile.velocityY = -4;

  missile.scale = 0.3;
  missileGroup.add(missile);
  missile.lifetime =500;
  

}


function stone() {
  if (World.frameCount % 200 === 0){
   var stone = createSprite(Math.round(random(100,600)),0, 10, 10);
   stone.addImage(stoneImage);
   stone.scale = 0.3
   stone.velocityY =8;
   stoneGroup.add(stone);
   stone.lifetime =500;
   //stone.debug=true;
   stone.setCollider("RECTANGLE",1,1)
}

      

}


function stone2() {
 if (World.frameCount % 250 === 0){
  var stone2 = createSprite(Math.round(random(10,500)),0, 10, 10);
  stone2.addImage(stone2Image);
  stone2.velocityY =8;
  stone2Group.add(stone2);
  stone2.lifetime =500;
  //stone.debug=true;
  //stone2.setCollider("RECTANGLE",1,1)
}

     

}
 
 function draw() {
  
    
   if (keyDown("SPACE")) {
    createmissile();
    
  }
  stone();
  stone2();
  
 
        
 
  if(space.y > 400){
    space.y = 200
  } 
  roket.x = World.mouseX;
   
   
    
  
    
   
    if (stoneGroup.isTouching(roket) || stone2Group.isTouching(roket)) {
      //gameState = "end";
      stoneGroup.destroyEach();
      stone2Group.destroyEach();
      missileGroup.destroyEach();
      gameover.visible = true;
      stoneGroup.setVelocityYEach(0);
      stone2Group.setVelocityYEach(0);
      missileGroup.setVelocityYEach(0);

      
      
      roket.destroy();
      //missile.destroy();
      
      
      
    }

   if (missileGroup.isTouching(stoneGroup) || missileGroup.isTouching(stone2Group)) {
      stoneGroup.destroyEach();
      stone2Group.destroyEach();
      
      missileGroup.destroyEach();
      score=score+25;
    
    }




 
  
 
   
   drawSprites(); 
    
    
    
    
    
   textSize(50)
   stroke("purple");
   strokeWeight(30)
   fill("black");
  
   text("Score:"+ score, 60,55);
 }
 
 
 


 


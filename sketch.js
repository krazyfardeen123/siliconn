var sugarImg

function preload(){
  pillowimg= loadImage("pillow.png");
  player2img= loadImage("vene1.png");
  player1img= loadImage("Ralph.png");
 sugarImg = loadImage("sugar.png");

}




function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
  player1 = createSprite(50,height-100,30,30)
  pillow = createSprite(100,50,30,30)
pillow.addImage("pillow",pillowimg)
pillow.scale=0.05;
  player2 = createSprite(400,200,30,30)
  player2.addImage("vene1",player2img)
  player2.scale=0.1;
  player2.shapeColor = "red"
  player1.shapeColor= "black"
  player1.addImage("ralph",player1img)
  player1.scale=0.1
  pillow .shapeColor="white"
  //maze

  wall1 = createSprite(width/2,30,800,10)
  wall2 = createSprite(120,height/2,10,300)
 wall3 = createSprite(100,400,800,10)
 
 wall4 = createSprite(20,height/2,10,300)
 wall5 = createSprite(400,250,300,10)
 wall6 = createSprite(250,height/4,10,300)
 wall7= createSprite(700,height/3,10,300)

}

function draw() {
 image(sugarImg,0,0,1200,600)
  if(keyDown(UP_ARROW )&& player2.y>10){
    player2.y = player2.y-5
  }
  
  if(keyDown(DOWN_ARROW)){
    player2.y = player2.y+5
  }
  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-4
  }
  if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x+4
  }
  if(player2.isTouching(pillow)){
   player1.destroy()
  }
  if(keyDown(UP_ARROW )&& player2.y>10){
    player2.y = player2.y-5
  }
  
if(player2.isTouching(wall1) || player2.isTouching(wall2) || player2.isTouching(wall3)
|| player2.isTouching(wall4)|| player2.isTouching(wall5)|| player2.isTouching(wall6)
|| player2.isTouching(wall7)
){
  player2.x=400;
  player2.y=200;
} 
  
  drawSprites();
}
//maze
//pillow
//points
//background
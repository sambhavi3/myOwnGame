var path, virus, signal, sanitizer, mask, end;
var signalG, sanitizerG, maskG; 
var pathImg, virusImg, signalImg, maskImg, sanitizerImg, endImg;
var PLAY=1;
var END=0;
var gameState=1;
var score=0;
function preload() {

virusImg= loadImage("virus.png");
signalImg= loadImage("signal.jpg");
maskImg= loadImage("mask.jpg");
sanitizerImg= loadImage("santizer.png");
endImg= loadAnimation("gameOver.png");
pathImg=loadImage("Road.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  path= createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY=4;

  virus= createSprite(width/2, height-20, 20, 20);
  virus.addImage(virusImg);
  virus.scale= 0.5;
  

  maskG=new Group();
  signalG = new Group();
  sanitizerG= new Group();
  
}
function draw() {
 if(gameState===PLAY){
 background(0);
 virus.x=World.mouseX;
  
  edges= createEdgeSprites();
  virus.collide(edges);

  if(path.y>height){
    path.y=height/2;

    if(sanitizerG.isTouching(virus)){
      virus.velocityY=0;
      mask.velocityY=0;
      sanitizer.velocityY=0
      end.addImage(endImg);
    }

  }
  
  createMask();
  createSignal();
  createSanitizer();
 }

  drawSprites();
}
function createMask(){
  if(World.frameCount%200==0){
    var mask = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    mask.addImage(maskImg);
    mask.velocityY=3;
    mask.lifetime=150;
    mask.scale=1;
    maskG.add(mask);

  }
}
  function createSignal(){
    if(World.frameCount%240==0){
      var signal= createSprite(Math.round(random(50, width-50), 40, 10, 10));
      signal.addImage(signalImg);
      signal.velocityY=3;
      signal.lifetime=150;
      signal.scale=1;
      signalG.add(signal);
    }
  }

  function createSanitizer(){
    if(World.frameCount%540==0){
      var sanitizer= createSprite(Math.round(random(50, width-50),40, 10, 10));
      sanitizer.addImage(sanitizerImg);
      sanitizer.velocityY=3;
      sanitizer.lifetme=150;
      sanitizer.scale=1;
      sanitizerG.add(sanitizer);
    }
  }
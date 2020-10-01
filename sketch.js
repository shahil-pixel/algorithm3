var frect,mrect;

function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  frect.shapeColor="blue";
  mrect = createSprite(400,300,90,40);
  mrect.shapeColor="blue";
  mrect.debug=true;
  frect.debug=true;
}

function draw() {
  background(0);
  mrect.x=World.mouseX
  mrect.y=World.mouseY

if(mrect.x-frect.x<frect.width/2+mrect.width/2
  &&frect.x-mrect.x<frect.width/2+mrect.width/2
  &&mrect.y-frect.y<frect.height/2+mrect.height/2
  &&frect.y-mrect.y<frect.height/2+mrect.height/2){
  mrect.shapeColor="red";
}else{
  mrect.shapecolor = "blue";
}


  drawSprites();
}
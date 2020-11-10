var movingrect,fixedrect;



function setup() {
   createCanvas(400,400);
 movingrect = createSprite(200,200,50,50); 
 movingrect.shapeColor = "gold";
 fixedrect = createSprite(100,250,50,50);
fixedrect.shapeColor = "red";
}

function draw() {
  background(0);
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;
 
if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
   fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
   movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
   fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
fixedrect.shapeColor =  "green";
movingrect.shapeColor = "green";
}
else{
  movingrect.shapeColor = "gold";
  fixedrect.shapeColor = "red";
}
  drawSprites();

}

//Create variables here
var dog,dogimg
var foodS,foodStock,database
var dogHappy
function preload()
{
  dogimg=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,300);
  dog.addImage(dogimg);
  dog.scale=0.1;
}
foodStock=database.ref('food');
foodStock.on("value",readStock);


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);   
}
 drawSprites();
  //add styles here
fill("Brown")
text("foodremaining: "+ foodS,170,200)
textSize(30)
text ("note:press UP_ARROW key to feed Bruno",130,10)
}
fucntion readStock(data) {
foodS=data.val();
}
//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
  }
}


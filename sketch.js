//Create variables here
var dog ,happyDog;
var  dogimg,dogimg1;
var database;
var foodS, foodStock;

function preload()
{
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);

   dog=createSprite(250,300,150,150); 
   dog.addImage(dogimg)
   dog.scale=0.2;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogimg1);
}

drawSprites();

textSize(20);
stroke(10);
fill("white");
text ("foodStock",150,150);
text("note press UP_ARROW TO FEED DRAGO MILK",50,100)





//add styles here

}



function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
if(x<=0){
  x=0;
}
else{
  x=x-1
}
  database.ref('/').update({
    food:x
  })
}

var barnImg,carImg,cowImg,eggsImg,farmerImg,houseImg,jungleImg,milkImg,roadImg,shopImg;
var gameState;
var bgImg;
var farmer;

function preload(){
    barnImg = loadImage("images/barn.png");
    carImg = loadImage("images/car.png");
    cowImg = loadImage("images/cow.png");
    eggsImg  = loadImage("images/eggs.png");
   // farmerImg  = loadAnimation("images/farmer1.png","images/farmer2.png","images/farmer3.png", "images/farmer4.png", "images/farmer5.png");
    houseImg  = loadImage("images/house.png");
    jungleImg  = loadImage("images/jungle.png");
    milkImg  = loadImage("images/milk.png");
    roadImg  = loadImage("images/road.png");
    shopImg  = loadImage("images/shop.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    gameState = "start";

    bgImg = houseImg;
    farmer = createSprite(width/2+70,height-100,20,50);
   // farmer.addAnimation(farmerImg); 

}
function draw(){
    background(bgImg);
    navigateFarmer();
    drawSprites();
}

function navigateFarmer(){

    if(keyDown(RIGHT_ARROW) ){
        farmer.x = farmer.x+20 
        if(gameState === "start" && farmer.x === width-50){
            clear();
            bgImg = barnImg;
console.log("barn")
farmer.x = width/2;
        }
        
        }
    }
function loadbgImage(){
    if(gameState === start){

    }
}
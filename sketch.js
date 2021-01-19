var music;
var canvas;
var gameObject1,gameObject2,gameObject3,gameObject4,gameObject5;
var line1,line2,line3,line4;

function preload(){

music=loadSound("  music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    gameObject1=createSprite(700,590,180,15);
    gameObject1.shapeColor="green";

    gameObject2=createSprite(500,590,180,15);
    gameObject2.shapeColor="red";
    
    gameObject3=createSprite(300,590,180,15);
    gameObject3.shapeColor="orange";

    gameObject4=createSprite(100,590,180,15);
    gameObject4.shapeColor="darkblue";

    gameObject5=createSprite(400,100,40,40);
    gameObject5.shapeColor="black";
    //create box sprite and give velocity
    line1=createSprite(0,300,10,700);
    line1.shapeColor="yellow";

    line2=createSprite(800,300,10,700);
    line2.shapeColor="yellow";

    line3=createSprite(400,0,900,10);
    line3.shapeColor="yellow";

}

function draw() {
    background("yellow");
    //create edgeSprite

    if(keyDown(RIGHT_ARROW)){
        gameObject5.velocityY=1;
        gameObject5.velocityX=4;   
       }
       
       if(keyDown(LEFT_ARROW)){
        gameObject5.velocityX=-6;   
       }
       
       if(keyDown(UP_ARROW)){
        gameObject5.velocityY=-5;
        gameObject5.velocityX=-4;   
       }
      
       if(keyDown(DOWN_ARROW)){
        gameObject5.velocityY=6;
        gameObject5.velocityX=3;   
       }

        gameObject5.bounceOff(line1);
        gameObject5.bounceOff(line2);
        gameObject5.bounceOff(line3);



      if(gameObject1.isTouching(gameObject5) && gameObject5.bounceOff(gameObject1)){
        gameObject5.shapeColor="green";
        music.play();
      }

      if(gameObject2.isTouching(gameObject5) && gameObject5.bounceOff(gameObject2)){
        gameObject5.shapeColor="red";
        music.play();
    }

      if(gameObject3.isTouching(gameObject5) && gameObject5.bounceOff(gameObject3)){
        gameObject5.shapeColor="orange";
        music.play();
    }

      if(gameObject4.isTouching(gameObject5) && gameObject5.bounceOff(gameObject4)){
        gameObject5.shapeColor="darkblue";
        music.play();
      }

drawSprites();
    //add condition to check if box touching surface and make it box
}

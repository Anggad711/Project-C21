
var FixedSprite1, FixedSprite2, FixedSprite3, FixedSprite4;
var MovingSQ;

function preload(){
}

function setup(){
    
  createCanvas(800,600);

    

      MovingSQ=createSprite(random(10,700),300,20,20);
      MovingSQ.shapeColor="cyan";
      MovingSQ.velocityX=6;
      MovingSQ.velocityY=10;

   
    FixedSprite1= createSprite(100,590,180,20);
    FixedSprite1.shapeColor="red";

  FixedSprite2 = createSprite(300,590,180,20);
  FixedSprite2.shapeColor="green";

  FixedSprite3= createSprite(500,590,180,20);
    FixedSprite3.shapeColor="blue";

     FixedSprite4  = createSprite(700,590,180,20);
     FixedSprite4. shapeColor="yellow";

    

}

function draw() {
    background("#98AFC7");
   
    if(MovingSQ.x<10){
        MovingSQ.velocityX=6
    } else if(MovingSQ.x>795){

         MovingSQ.velocityX=-7
    }
   
  if(isTouching(MovingSQ,FixedSprite4)){
       MovingSQ .shapeColor="#FFA500";
       bounceOff (MovingSQ,FixedSprite4)
    }
  
  else if(isTouching(MovingSQ,FixedSprite3)){

       MovingSQ.shapeColor="#4863A0";
       bounceOff( MovingSQ,FixedSprite3 )
    }
    
  else if(isTouching(MovingSQ,FixedSprite2)){
       MovingSQ  .shapeColor="#50C878";
    bounceOff (MovingSQ,FixedSprite2)
    MovingSQ .velocityX=0;
    MovingSQ.velocityY=0;
  }
  
  else if(isTouching(MovingSQ,FixedSprite1)){
    MovingSQ.  shapeColor="red";
    bounceOff (MovingSQ,FixedSprite1)
  }

  if (MovingSQ.y<10){
    MovingSQ. velocityY=6
  }
    drawSprites()
}

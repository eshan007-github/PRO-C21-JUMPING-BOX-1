var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,150,20)
    surface1.shapeColor = "cyan"

    surface2 = createSprite(300,580,150,20)
    surface2.shapeColor = "red"

    surface3 = createSprite(500,580,150,20)
    surface3.shapeColor = "pink"

    surface4 = createSprite(700,580,150,20)
    surface4.shapeColor = "yellow"


    ball = createSprite(400,300,20,20)
    ball.shapeColor = "#3fff00"


    edges = createEdgeSprites()
    //create box sprite and give velocity
     ball.velocityX = 5
     ball.velocityY = 5
}

function draw() {
    background("black");
    //create edgeSprite

 
    
    drawSprites()
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "cyan"
        ball.velocityX = 0
        ball.velocityY = 0

    }
    else if(surface2.isTouching(ball) &&  ball.bounceOff(surface2)){
        ball.shapeColor = "red"
    }
    else if(surface3.isTouching(ball) &&  ball.bounceOff(surface3)){
        ball.shapeColor = "pink"
        music.play()
    }
    else if(surface4.isTouching(ball) &&  ball.bounceOff(surface4)){
        music.stop()
        ball.shapeColor = "yellow"
    }

    //add condition to check if box touching surface and make it box

    ball.bounceOff(edges)
}

var canvas;
var edges;
var music;
var box;
var blueSurface,yellowSurface,pinkSurface,greenSurface;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(770,500);

    //create 4 different surfaces
    blueSurface = createSprite(100,480,180,25);
    blueSurface.shapeColor = "blue";
    yellowSurface = createSprite(290,480,180,25);
    yellowSurface.shapeColor = "yellow";
    pinkSurface = createSprite(480,480,180,25);
    pinkSurface.shapeColor = "magenta";
    greenSurface = createSprite(670,480,180,25);
    greenSurface.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,30,30);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(blueSurface.isTouching(box) && box.bounceOff(blueSurface)){
      box.shapeColor = "blue";
      music.play();
    }

    if(yellowSurface.isTouching(box) && box.bounceOff(yellowSurface)){
        box.shapeColor = "yellow";
        music.play();
    }

    if(pinkSurface.isTouching(box) && box.bounceOff(pinkSurface)){
        box.shapeColor = "magenta";
        music.play();
    }

    if(greenSurface.isTouching(box) && box.bounceOff(greenSurface)){
        box.shapeColor = "green";
        music.play();
    }

    drawSprites();
}

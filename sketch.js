var database;
var ballPos;
var pos;
var car1, car2, car3, car4, cars
var playerCount = 0;
var gameState = 0;
var allPlayers;

var form, game, player;

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
}

function draw(){
    background("lightblue");


    if(playerCount == 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play()
    }
    
}

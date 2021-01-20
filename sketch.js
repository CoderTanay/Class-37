var ball;
var database;
var ballPos;
var pos;

var playerCount = 0;
var gameState = 0;

var form, game, player;

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
}

function draw(){
    background("lightblue");
    
}

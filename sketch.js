const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var background;
var hero,monster;
var slingShot;

function preload() {
//preload the images here

backgroundImage = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1255,590);
  engine=Engine.create();
  world = engine.world;

   slingShot= new Fly(hero.body,{x:500,y:50});

  hero= new Hero(300,320,40,40);
  monster= new Monster(233,143,40);
}

function draw() {
background(backgroundImage);

monster.display();
hero.display();
fly.display();

}
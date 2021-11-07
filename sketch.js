var bg;
var shooterStandingImg, shooterStanding;
var shooterShootingImg, shooterShooting;
var police,policeImg;
var gunImg, gun;
var BigGunshooterStandingImg,BigGunshooterStanding;
var BigGunshooterShootingImg,BigGunshooterShooting;
var police2Img, Police2;
var bulletImg, bullet;
var bullets=[]
var gameState="serve"
function preload(){
 bg=loadImage("bgstreet.jpeg")
 shooterStandingImg=loadImage("shooterstill-removebg-preview.png")
 policeImg=loadImage("policespritesheet-removebg-preview.png")
 gunImg=loadImage("gun-removebg-preview.png")
 police2Img=loadImage("police-removebg-preview.png")
 bulletImg=loadImage("bullet-removebg-preview.png")
 BigGunshooterStandingImg=loadImage("Biggunshooterstanding.png")
}
function setup() {
 createCanvas(displayWidth - 20, displayHeight-30);
for(var i=0; i<10 ;i++){
  bullet=createSprite(138,444)
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityX=0;
  }
shooterStanding=createSprite(displayWidth/8, displayHeight-300)
shooterStanding.addImage(shooterStandingImg)
police=createSprite(displayWidth/2, displayHeight-300)
police.addImage(policeImg)
police.scale=0.5
gun=createSprite(displayWidth/4,displayHeight-300)
gun.addImage(gunImg)
gun.scale=0.3
Police2=createSprite(displayWidth/5,displayHeight-300)
Police2.addImage(police2Img)
Police2.scale=0.5
}
function draw() {
background(bg);
if(keyWentDown("space")&& gameState==="serve"){
bullet.velocityX=10;
bullet.x= 138
bullet.y=144

gameState="play"
}
if(bullets.x>displayWidth && keyWentDown("space") && gameState==="play"){
bullet.velocityX=10
bullet.x= 138
bullet.y=144
}
drawSprites();
}
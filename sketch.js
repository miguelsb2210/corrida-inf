function preload(){
cenario=loadImage("fundo-do-jogo.jpg")
homen=loadImage("corredor.png")
}

function setup() {
createCanvas(500,500)
chao=createSprite(200,300,500,20) 
corredor=createSprite(10,450)
chao.addImage(cenario)
corredor.addImage(homen)
corredor.scale=0.2
corredor.velocityX=1
}

function draw() {
 drawSprites()
 
}
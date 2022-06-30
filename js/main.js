const phone = document.querySelector('.phone')
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function randomGenerationPoint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

class SnakePart{
    constructor(x,y){
        this.x = x;
        this.y= y;
    }
}
  
let speed = 7;
let headY = randomGenerationPoint(1, canvas.height);
let headX = randomGenerationPoint(1, canvas.width);
let moveX = 0;
let moveY = 0;
let foodY = randomGenerationPoint(1, canvas.height);
let foodX = randomGenerationPoint(1, canvas.width);
const snakeBody = [];
let tailLength = 2;

function randomGenerationPoint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function drawGame(){
    clearScreen()
    moveSnake()
    snakeEatsFood()
    drawFood()
    drawSnake()
    setTimeout(drawGame, 100/speed)
}

function clearScreen(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

function drawSnake(){

    for(let i = 0; i<snakeBody.length; i++){
        let body = snakeBody[i];
        ctx.fillRect(body.x, body.y, 5, 5)
    }

    snakeBody.push(new SnakePart(headX, headY))
    if(snakeBody.length > tailLength) snakeBody.shift();

    ctx.fillRect(headX, headY, 5, 5);

}

function moveSnake(){
    headX += moveX;
    headY += moveY;
}

function drawFood(){
    ctx.fillRect(foodX, foodY, 4, 4)
}

function snakeEatsFood(){
    if(foodX === headX && foodY === headY){
        foodY = randomGenerationPoint(1, canvas.height);
        foodX = randomGenerationPoint(1, canvas.width);
        tailLength++;
    }
}
//event listener for key presses
document.body.addEventListener('keydown', e=>{
    e.preventDefault();
    positionKey(e.keyCode)
})

// Decide the direction of the snake from the key presses
function positionKey(e){
    switch(e){
    //key right
      case 39:
        if(moveX === -1) {
            break
        }
        moveX =1;
        moveY = 0;
        break;
    //key up
      case 38:
        if(moveY === 1) {
            break
        }
        moveX = 0;
        moveY = -1;
        break;
    //key down
      case 40:
        if(moveY === -1) {
            break
        }
        moveX = 0;
        moveY = 1;
        break;
    //key left
    case 37:
        if(moveX === 1) {
            break
        }
        moveX = -1;
        moveY = 0;
        break;
    }
    
}


drawGame()
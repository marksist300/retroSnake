let totalFoodEaten = 0;
const gameScreen = document.querySelector('canvas');
const phone = document.querySelector('.phone')
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');
// snake and food objects
let snake= {
    headX: Math.floor(Math.random()*gameScreen.width),
    headY: Math.floor(Math.random()*gameScreen.height),
    moveX: 0,
    moveY: 0,
    width: 10,
    _height: 5,

    get height(){
        return this._height;
    },

    drawSnake(){
        ctx.beginPath();
        ctx.fillRect(snake.headX, snake.headY, snake.width, snake.height);
    },

    increase() {
        this.width += 5;
    }
}

let food = {
    x: Math.floor(Math.random()*gameScreen.width),
    y: Math.floor(Math.random()*gameScreen.height),
    foodReload(){
        this.x = Math.floor(Math.random()*gameScreen.width)
        this.y = Math.floor(Math.random()*gameScreen.height)
        this.drawFood();
        console.log('after',this.x, this.y)
    },

    drawFood(){
        ctx.beginPath();
        ctx.strokeRect(this.x, this.y, 4, 4)
        console.log('before',this.x, this.y)
    }
}

// launch initial Game canvas into action
function gameCanvas(){
        snakeMotion()
    }

phone.addEventListener('click', gameCanvas)


function snakeBodyIncreaser(){
    snake.width += 5;
}

function clear(){
    ctx.clearRect(0,0, gameScreen.width, gameScreen.height)
}

function nextPosition(){
    snake.headX += snake.moveX;
    snake.headY += snake.moveY;
    // console.log('snake',snake.x, snake.y)
}

function snakeMotion(){
    if(snake.headX === food.x && snake.headY === food.y){
        // food.foodReload()
        // snake.increase()
        console.log('hello')
    }
    clear()
    food.drawFood();
    nextPosition()
    snake.drawSnake()
    requestAnimationFrame(snakeMotion)
} 

// Decide the direction of the snake from the key presses
function positionKey(e){
    switch(e){
    //key right
      case 39:
        if(snake.moveX === -1) {
            break
        }
        snake.moveX =1;
        snake.moveY = 0;
        break;
    
    //key up
      case 38:
        if(snake.moveY === 1) {
            break
        }
        snake.moveX = 0;
        snake.moveY = -1;
        break;
    //key down
      case 40:
        if(snake.moveY === -1) {
            break
        }
        snake.moveX = 0;
        snake.moveY = 1;
        break;
    //key left
    case 37:
        if(snake.moveX === 1) {
            break
        }
        snake.moveX = -1;
        snake.moveY = 0;
        break;
    }
    
}

// event listener for key presses
document.body.addEventListener('keydown', e=>{
    positionKey(e.keyCode)
})
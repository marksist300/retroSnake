let totalFoodEaten = 0;
const gameScreen = document.querySelector('canvas');
const phone = document.querySelector('.phone')
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

let snake= {
    x: Math.floor(Math.random()*gameScreen.width),
    y: Math.floor(Math.random()*gameScreen.height),
    moveX: 0,
    moveY: 0,
    width: 10,
    _height: 5,

    get height(){
        return this._height;
    },
}

let food = {
    x: Math.floor(Math.random()*gameScreen.width),
    y: Math.floor(Math.random()*gameScreen.height),

    foodReload(){
        this.x = Math.floor(Math.random()*gameScreen.width)
        this.y = Math.floor(Math.random()*gameScreen.height)
        this.drawFood();
    },

    drawFood(){
        ctx.beginPath();
        ctx.strokeRect(this.x, this.y, 5, 5)
        console.log('working', this.x, this.y)
    }
}

function drawSnake(){
    ctx.beginPath();
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
}

function drawFood(){
    // let x =Math.floor(Math.random()*gameScreen.width);
    // let y = Math.floor(Math.random()*gameScreen.height);
    ctx.beginPath();
    ctx.strokeRect(x, y, .5, .5)
}

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
    snake.x += snake.moveX;
    snake.y += snake.moveY;
}

function snakeMotion(){
    clear()
    food.drawFood();
    nextPosition()
    drawSnake()
    requestAnimationFrame(snakeMotion)
} 

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


document.body.addEventListener('keydown', e=>{
    positionKey(e.keyCode)
})
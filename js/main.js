let totalFoodEaten = 0;
let size = 10
const gameScreen = document.querySelector('canvas');

let snake= {
    _x: Math.floor(Math.random()*gameScreen.width),
    _y: 2,
    _width: 10,
    _height: 5,

    get xPos(){
        return this._x;
    }, 

    get yPos(){
        return this_y;
    },

    get width(){
        return this._width;
    },

    get height(){
        return this.height;
    },

    set width(value){
        return this._width += value;
    },
}

function gameCanvas(){
        console.log('loaded')
        const canvas = document.querySelector('#game-canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath()
        // ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
        // ctx.lineTo(50, 50);
        // filled square X: 125, Y: 35, width/height 50
    }
gameCanvas()

gameScreen.addEventListener('click', increaser)

function increaser(){
    snake.width += 5;
    console.log(size)
    gameCanvas()
}
console.log()

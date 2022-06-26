let totalFoodEaten = 0;
let size = 10
const gameScreen = document.querySelector('.phone');

function gameCanvas(){
        console.log('loaded')
        const canvas = document.querySelector('#game-canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.fillRect(2, 2, size, 5);
        ctx.lineTo(50, 50);
        ctx.stroke()
        // filled square X: 125, Y: 35, width/height 50
    }
gameCanvas()

gameScreen.addEventListener('click', increaser)

function increaser(){
    size += 5;
    console.log(size)
    gameCanvas()
}

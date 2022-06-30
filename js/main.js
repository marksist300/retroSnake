const phone = document.querySelector('.phone')
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function randomGenerationPoint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let speed = 7;

function randomGenerationPoint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function drawGame(){
    setTimeout(drawGame, 1000/speed)
}

function clearScreen(){
    ctx.clearRect(0,0, gameScreen.width, gameScreen.height)
}


headY = randomGenerationPoint(1, canvas.height);
headX   = randomGenerationPoint(1, canvas.width);
moveX = 0;
moveY = 0;

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



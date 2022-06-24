let totalFoodEaten = 0;

const gameScreen = document.querySelector('#screen');

(function gameCanvas(){
    function init(){
        const canvas = document.querySelector('#screen');
        const context = canvas.getContext('2d');
        context.beginPath()
        context.fillRect(2, 2, 4, 4)
      
        // filled square X: 125, Y: 35, width/height 50
        context.beginPath()
        context.fillRect(125, 35, 50, 50)
    }
    document.addEventListener('DOMContentLoaded', init)
})();

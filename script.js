import Game from './game.js';

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.font = '40px Bangers';
    ctx.textAlign = 'center';
    const game = new Game(canvas);
    let lastTime = 0;


    game.init();


    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.render(ctx, deltaTime);
        requestAnimationFrame(animate)
    }

    animate(0);
    
})
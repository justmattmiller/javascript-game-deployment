const obstaclesArr = [];
const player = new PlayerElm();
const bulletArr = [];
const collisionSound = document.getElementById('explodeSound');
const splatSound = document.getElementById('splatSound');
const shootSound = document.getElementById('shootSound');




setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 1000);

setInterval(() => {
  obstaclesArr.forEach((obstacleInstance,index) => {
    obstacleInstance.moveLeft();
    if (obstacleInstance.positionX < 0 - obstacleInstance.width) {
      obstacleInstance.obstacleElm.remove();
      obstaclesArr.splice(index, 1);
    }

    const { playerCollision = false, bulletCollision = false } = obstacleInstance.checkCollision(player, bulletArr);
    

    if (playerCollision) {
      scoreboard.decreaseLife();
      splatSound.play();

      const obstacleElement = obstacleInstance.obstacleElm;
      const obstaclePosition = obstacleElement.getBoundingClientRect();

      obstacleElement.remove();
      obstaclesArr.splice(index, 1);

      const splatSprite = document.getElementById('splat-sprite');
      const gameBoard = document.getElementById('game');
      
      const gameBoardRect = gameBoard.getBoundingClientRect();
      const gameBoardOffsetLeft = gameBoardRect.left;
      const gameBoardOffsetTop = gameBoardRect.top;
      
      const splatSpriteLeft = obstaclePosition.left - gameBoardOffsetLeft - 80; 
      const splatSpriteTop = obstaclePosition.top - gameBoardOffsetTop - 0;
      
      splatSprite.style.left = splatSpriteLeft + 'px';
      splatSprite.style.top = splatSpriteTop + 'px';
      splatSprite.style.display = 'block';

      setTimeout(() => {
        splatSprite.style.display = 'none';
      }, 2000);
}

  });
}, 1);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    const newBullet = new Bullet(player);
    bulletArr.push(newBullet);
    shootSound.play();
  }
});



setInterval(() => {
  bulletArr.forEach((bulletInstance, index) => {
    bulletInstance.updatePosition();

    if (bulletInstance.positionX > 969) {
      bulletInstance.bulletElm.remove();
      bulletArr.splice(index, 1);
    }
    
    obstaclesArr.forEach((obstacleInstance, obstacleIndex) => {
      const obstacleCollision = bulletInstance.checkCollision(obstacleInstance);
      
      
      if (obstacleCollision) {
        scoreboard.increaseScore();
        collisionSound.play();

        const bulletElement = bulletInstance.bulletElm;
        const bulletPosition = bulletElement.getBoundingClientRect();

        bulletInstance.bulletElm.remove();
        bulletArr.splice(index, 1);
        obstacleInstance.obstacleElm.remove();
        obstaclesArr.splice(obstacleIndex, 1);

        const explode = document.getElementById('explode');
        const gameBoard = document.getElementById('game');

        const gameBoardRect = gameBoard.getBoundingClientRect();
        const gameBoardOffsetLeft = gameBoardRect.left;
        const gameBoardOffsetTop = gameBoardRect.top;

        const explodeLeft = bulletPosition.left - gameBoardOffsetLeft - 55;
        const explodeTop = bulletPosition.top - gameBoardOffsetTop - 55;

        explode.style.left = explodeLeft + 'px';
        explode.style.top = explodeTop + 'px';
        explode.style.display = 'block';

        setTimeout(() => {
          explode.style.display = 'none';
        }, 1000); 
        
      }
    });
    
  });
}, 1);

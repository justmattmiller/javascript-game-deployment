const obstaclesArr = [];
const player = new PlayerElm();
const bulletArr = [];


setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 1000);

setInterval(() => {
  obstaclesArr.forEach((obstacleInstance, index) => {
    obstacleInstance.moveLeft();

    if (obstacleInstance.positionX < 0 - obstacleInstance.width) {
      obstacleInstance.obstacleElm.remove();
      obstaclesArr.splice(index, 1); 
    }

    if (obstacleInstance.checkCollision(player)) {
      
    }
  });
}, 5);


document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      const newBullet = new Bullet(player); 
      bulletArr.push(newBullet);
    }
  });

  setInterval(() => {
    bulletArr.forEach((bulletInstance, index) => {
      bulletInstance.moveRight();
  
      if (bulletInstance.positionX > 988) {
        bulletInstance.bulletElm.remove();
        bulletArr.splice(index, 1); 
      }
  

    });
  }, 3);



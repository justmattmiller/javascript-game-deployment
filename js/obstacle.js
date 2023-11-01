
class Obstacle {
    constructor() {
        this.width = 50
        this.height = 50
        this.positionX = 990 - this.width
        this.positionY = Math.floor(Math.random() * (1000 - this.height + 1));
        // this.hasCollided = false;

        this.obstacleElm = document.createElement('div');
        this.obstacleElm.style.position = 'absolute';
        this.obstacleElm.style.width = this.width + 'px';
        this.obstacleElm.style.height = this.height + 'px';
        this.obstacleElm.style.left = this.positionX + 'px';
        this.obstacleElm.style.bottom = this.positionY + 'px';
        this.obstacleElm.classList.add('obstacle-class');

        this.createDomElement();
    
    }
    createDomElement() {
        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.obstacleElm);
        this.boardWidth = parentElm.offsetWidth;
    }

    moveLeft() {
        this.positionX--;
        this.obstacleElm.style.left = this.positionX + 'px';
    }

    updatePosition() {
        this.moveLeft();

        if (this.positionX < 0 - this.width) {
            this.obstacleElm.remove();
            obstaclesArr.shift();
        }
    }


    checkCollision(player) {
        if (
          player.positionX < this.positionX + this.width &&
          player.positionX + player.width > this.positionX &&
          player.positionY < this.positionY + this.height &&
          player.positionY + player.height > this.positionY
        ) {
          if (!player.hasCollided) {
            player.hasCollided = true;
            location.href = "./gameover.html"; 
          }
        }
      }
}


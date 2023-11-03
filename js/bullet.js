
class Bullet {
    constructor(player) {
        this.player = player;
        this.width = 30;
        this.height = 30;
        this.positionX = this.player.positionX + this.width / 2;
        this.positionY = this.player.positionY + this.height / 2;
        this.hasCollided = false;
        this.isMoving = true;


        this.bulletElm = document.createElement('div');
        this.bulletElm.style.position = 'absolute';
        this.bulletElm.style.width = this.width + 'px';
        this.bulletElm.style.height = this.height + 'px';
        this.bulletElm.style.left = this.positionX + 300 + 'px';
        this.bulletElm.style.bottom = this.positionY + 22 + 'px';
        this.bulletElm.classList.add('bullet-class');

        this.createDomElement();

    }

    createDomElement() {
        const parentElm = document.getElementById('game');
        parentElm.appendChild(this.bulletElm);
        this.gameWidth = parentElm.offsetWidth;

        this.bulletElm.style.zIndex = '1'; 
    }

    moveRight() {
        if (this.isMoving) {
          if (this.positionX + this.width < this.gameWidth) {
            this.positionX += 1;
            this.bulletElm.style.left = this.positionX + 'px';}

        }
      }

    stop() {
        this.isMoving = false;
    }

    checkCollision(obstacle) {
        let obstacleCollision = false;
      
        if (
          obstacle.positionX < this.positionX + this.width &&
          obstacle.positionX + obstacle.width > this.positionX &&
          obstacle.positionY < this.positionY + this.height &&
          obstacle.positionY + obstacle.height > this.positionY
        ) {
          obstacleCollision = true;
        }
      
        return obstacleCollision;
      }
    


    updatePosition() {
        if (this.isMoving) {
          this.moveRight();
      
        }
      }

    }


class Bullet {
    bulletMoving = false
    constructor(player) {
        this.player = player;
        this.width = 10;
        this.height = 10;
        this.positionX = this.player.positionX + this.width / 2;
        this.positionY = this.player.positionY + this.height / 2;
        this.hasCollided = false;


        this.bulletElm = document.createElement('div');
        this.bulletElm.style.position = 'absolute';
        this.bulletElm.style.width = this.width + 'px';
        this.bulletElm.style.height = this.height + 'px';
        this.bulletElm.style.left = this.positionX + 'px';
        this.bulletElm.style.bottom = this.positionY + 'px';
        this.bulletElm.classList.add('bullet-class');

        this.createDomElement();

    }

    createDomElement() {
        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.bulletElm);
        this.boardWidth = parentElm.offsetWidth;
    }

    moveRight() {
        if (this.positionX + this.width < this.boardWidth) {
            this.positionX += 1;
            this.bulletElm.style.left = this.positionX + 'px';
        }
    }

    updatePosition() {
        this.moveRight();

        if (this.positionX + this.width > 1000) {
            this.removeBullet();
        }

        this.positionX = this.player.positionX;
        this.bulletElm.style.left = this.positionX + 'px';
    }

    checkCollision(obstacle) {
        if (
            obstacle.positionX < this.positionX + this.width &&
            obstacle.positionX + obstacle.width > this.positionX &&
            obstacle.positionY < this.positionY + this.height &&
            obstacle.positionY + obstacle.height > this.positionY
        ) {
            //   if (!obstacle.hasCollided) {
            //     obstacle.hasCollided = true;
            //     location.href = "./gameover.html"; 
            //   }
        }
    }
}





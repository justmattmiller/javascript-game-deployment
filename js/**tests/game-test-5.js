class GameElement {
    constructor(player) {
        this.player = player;
        this.score = 0;
    }
}

class PlayerElm {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.positionX = 30;
        this.positionY = 290;

        this.playerElm = document.createElement('div');
        this.playerElm.style.position = 'absolute';
        this.playerElm.style.width = this.width + 'px';
        this.playerElm.style.height = this.height + 'px';
        this.playerElm.style.left = this.positionX + 'px';
        this.playerElm.style.bottom = this.positionY + 'px';
        this.playerElm.classList.add('player-class');

        this.createDomElement();
        this.animateInterval = setInterval(() => {
            this.updatePosition();
        }, 64);

        this.directionY = 0; 

        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                    this.directionY = -1;
                    break;
                case 'ArrowDown':
                    this.directionY = 1;
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                case 'ArrowDown':
                    this.directionY = 0;
                    break;
            }
        });
    }

    createDomElement() {
        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.playerElm);
    }

    moveUp() {
        if (this.positionY > 0) {
            this.positionY += 10; 
            this.playerElm.style.bottom = this.positionY + 'px';
        }
    }
    
    moveDown() {
        const boardHeight = document.getElementById('board').offsetHeight;
        if (this.positionY + this.height < boardHeight) {
            this.positionY -= 10; 
            this.playerElm.style.bottom = this.positionY + 'px';
        }
    }

    updatePosition() {
        if (this.directionY === -1) {
            this.moveUp();
        } else if (this.directionY === 1) {
            this.moveDown();
        }
    }
}

const player = new PlayerElm();
const game = new GameElement(player);
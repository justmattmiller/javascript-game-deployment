class GameElement {
    constructor(player) {
        this.player = player
        this.score = 0
    }
}
class PlayerElm {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.positionX = 30;
        this.positionY = 290;

        this.playerElm = document.createElement('div');
        this.playerElm.style.position = "absolute"
        this.playerElm.style.width = this.width + "px";
        this.playerElm.style.height = this.height + "px";
        this.playerElm.style.left = this.positionX + "px";
        this.playerElm.style.bottom = this.positionY + "px";

        this.createDomElement();
        this.animateInterval = setInterval(() => {
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

        requestAnimationFrame(this.moveLoop.bind(this));
    }

    createDomElement() {
        const parentElm = document.getElementById("board");
        this.playerElm.classList.add('player-class');
        parentElm.appendChild(this.playerElm);
    }
    moveLoop() {
        this.positionY -= this.directionY * 5;

        const minPositionY = 0;
        const maxPositionY = window.innerHeight - this.height;
        this.positionY = Math.min(Math.max(this.positionY, minPositionY), maxPositionY);

        this.playerElm.style.bottom = this.positionY + 'px';
        requestAnimationFrame(this.moveLoop.bind(this));
    }

    // moveUp() {
    // this.positionY++; 
    // this.gameElm.style.bottom = this.positionY + "px";
    // }
    // moveDown() {
    // this.positionY--; 
    // this.gameElm.style.bottom = this.positionY + "px";
    // }
    updatePosition() {
        this.playerElm.style.position = "absolute"
        this.playerElm.style.bottom = this.positionY + "px"
        this.playerElm.style.left = this.positionX + "px"
    }
}

const player = new PlayerElm();
const game = new GameElement(player)













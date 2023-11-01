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

        this.createDomElement();
        this.animateInterval = setInterval(() => {
            this.updatePosition();
        }, 64);

        this.directionY = 0; // Keeps track of the Y-axis movement direction

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

        // Start the loop to handle continuous movement
        requestAnimationFrame(this.moveLoop.bind(this));
    }

    createDomElement() {
        const parentElm = document.getElementById('board');
        this.playerElm.classList.add('player-class');
        parentElm.appendChild(this.playerElm);
    }

    moveLoop() {
        this.positionY -= this.directionY * 2; // Adjust the speed to your liking

        // Limit the player's vertical movement within the viewport
        const minPositionY = 0; // Modify the min and max values if needed
        const maxPositionY = window.innerHeight - this.height;
        this.positionY = Math.min(Math.max(this.positionY, minPositionY), maxPositionY);

        this.playerElm.style.bottom = this.positionY + 'px'; // Update the position

        requestAnimationFrame(this.moveLoop.bind(this));
    }

    updatePosition() {
        this.playerElm.style.position = 'absolute';
        this.playerElm.style.bottom = this.positionY + 'px';
        this.playerElm.style.left = this.positionX + 'px';
    }
}

const player = new PlayerElm();
const game = new GameElement(player);
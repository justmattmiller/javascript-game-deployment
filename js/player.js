class PlayerElm {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.positionX = 50;
        this.positionY = 290;
        this.boardHeight = 0;
        this.hasCollided = false;

        this.playerElm = document.createElement('div');
        this.playerElm.style.position = 'absolute';
        this.playerElm.style.width = this.width + 'px';
        this.playerElm.style.height = this.height + 'px';
        this.playerElm.style.left = this.positionX + 'px';
        this.playerElm.style.bottom = this.positionY + 'px';
        this.playerElm.classList.add('player-class');

        this.createDomElement();


        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
            }
        });
    }

    createDomElement() {
        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.playerElm);
        this.boardHeight = parentElm.offsetHeight;
    }

    moveUp() {
        if (this.positionY + this.height < this.boardHeight) {
            this.positionY += 10;
            this.playerElm.style.bottom = this.positionY + 'px';
        }
    }
    
    moveDown() {
        if (this.positionY > 0) {
            this.positionY -= 10;
            this.playerElm.style.bottom = this.positionY + 'px';
        }
    }

}


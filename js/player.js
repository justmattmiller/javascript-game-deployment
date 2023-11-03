class PlayerElm {
    constructor() {
        this.width = 120;
        this.height = 120;
        this.positionX = 50;
        this.positionY = 290;
        this.gameHeight = 0;
        this.hasCollided = false;

        this.playerElm = document.createElement('div');
        this.playerElm.style.position = 'absolute';
        this.playerElm.style.width = this.width + 'px';
        this.playerElm.style.height = this.height + 'px';
        this.playerElm.style.left = this.positionX + 'px';
        this.playerElm.style.bottom = this.positionY + 'px';
        this.playerElm.classList.add('player-class');

        this.images = {
            up: './images/cat/cat-up.gif',
            down: './images/cat/cat-down.gif',
            static: './images/cat/cat-facing-right.png'
          };

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

        document.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
              this.changeImage('static');
            }
          });
    }

    createDomElement() {
        const parentElm = document.getElementById('game');
        parentElm.appendChild(this.playerElm);
        this.gameHeight = parentElm.offsetHeight;

        this.playerElm.style.zIndex = '2';
    }

    moveUp() {
        if (this.positionY + this.height < this.gameHeight) {
            this.positionY += 10;
            this.playerElm.style.bottom = this.positionY + 'px';
            this.changeImage('up');
        }
    }
    
    moveDown() {
        if (this.positionY > 0) {
            this.positionY -= 10;
            this.playerElm.style.bottom = this.positionY + 'px';
            this.changeImage('down');
        }
    }

    changeImage(state) {
        let imagePath;
        if (state === 'up') {
          imagePath = this.images.up;
        } else if (state === 'down') {
          imagePath = this.images.down;
        } else {
          imagePath = this.images.static || this.images.up;
        }
        this.playerElm.style.background = `url(${imagePath}) left/cover no-repeat`;
      }

}


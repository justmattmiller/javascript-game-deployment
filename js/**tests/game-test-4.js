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
        this.offsetX = 10; 
        this.positionX = 30;
        this.positionY = 290;

        this.playerElm = document.createElement('div');
        this.playerElm.classList.add('player-class');
        this.playerElm.style.transform = `translateY(${this.positionY}px) translateX(${this.offsetX}px)`;
        // this.playerElm.style.position = "absolute"
        // this.playerElm.style.width = this.width + "px";
        // this.playerElm.style.height = this.height + "px";
        // this.playerElm.style.left = this.positionX + "px";
        // this.playerElm.style.bottom = this.positionY + "px";

        this.createDomElement();
        this.moveLoop();
        
        //this.animateInterval = setInterval(() => {
        //}, 64);

        //this.directionY = 0; 

        document.addEventListener('keydown', (e) => {
            switch (e.code) {
              case 'ArrowUp':
                this.positionY -= 10;
                break;
              case 'ArrowDown':
                this.positionY += 10;
                break;
            }
            if (this.positionX <= this.offsetX) {
                this.positionX = this.offsetX;
              }
            });
          }
        

    createDomElement() {
        const parentElm = document.getElementById("board");
        this.playerElm.style.position = "absolute"
        this.playerElm.style.width = `${this.width}px`
        this.playerElm.style.height = `${this.height}px`
        parentElm.appendChild(this.playerElm);
        
    }
    moveLoop() {
        this.playerElm.style.transform = `translateY(${this.positionY}px) translateX(${this.positionX + this.offsetX}px)`;
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
    //updatePosition() {
        
        //this.playerElm.style.bottom = this.positionY + "px"
        //this.playerElm.style.left = this.positionX + "px"
    }


const player = new PlayerElm();
const game = new GameElement(player)













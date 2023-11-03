class Scoreboard {
    constructor() {
      this.scoreboard = document.getElementById("scoreboard");
      this.score = 0;
      this.life = 3;
      this.isCollision = false;

      this.updateLife()
      this.updateScore();
    }

    increaseScore() {
      this.score++;
      this.updateScore();

      if (this.score === 10) {
        location.href = "./youwin.html";
      }
    }


    decreaseLife() {
      this.life--;
      this.updateLife();

      if (this.life === 0) {
        location.href = "./gameover.html";
      }
    }



    updateLife() {
      this.scoreboard.innerText = `Life: ${this.life} - Score: ${this.score}`;
    }

    updateScore() {
      this.scoreboard.innerText = `Life: ${this.life} - Score: ${this.score}`;
    }
  }

  const scoreboard = new Scoreboard();

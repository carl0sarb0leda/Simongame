const blue = document.getElementById('blue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.begin();
    this.startSequence();
  }

  begin() {
    btnStart.classList.add('hide');
    this.level = 1;
    this.colors = {
      blue, //same as "blue: blue" because we already define the constant blue
      violet,
      orange,
      green,
    };
  };

  startSequence() {
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
  };

}

function startGame() {
  let game = new Game();
  console.log(game);
}

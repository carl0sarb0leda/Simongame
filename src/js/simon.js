const blue = document.getElementById('blue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.begin();
    this.startSequence();
    this.nextLevel();
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
  }

  startSequence() {
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
  }

  nextLevel () {
    this.saveSequence();
  }

  numberToColor(number) {
    switch (number) {
      case 0:
        return 'blue';
      case 1:
        return 'violet';
      case 2:
        return 'orange';
      case 3:
        return 'green';
    }
  }

  saveSequence() {
    for (let i = 0; i < this.level; i++) {
      let color = this.numberToColor(this.sequence[i]);
      setTimeout(() => this.lightUpColor(color), 1000 * i);
    }
  }

  lightUpColor(color) {
    this.colors[color].classList.add('light');
    setTimeout(() => this.lighDownColor(color), 350);
  }

  lighDownColor(color) {
    this.colors[color].classList.remove('light');
  }

}

function startGame() {
  let game = new Game();
  console.log(game);
}

const blue = document.getElementById('blue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');
const lastLevel = 10;

class Game {
  constructor() {
    this.begin();
    this.startSequence();
    setTimeout(this.nextLevel(), 500);
  }

  begin() {
    this.toggleBtnBegin();
    this.chooseColor = this.chooseColor.bind(this); //to avoid write in addClicks function
    this.nextLevel = this.nextLevel.bind(this);
    this.level = 1; //initial level
    this.colors = {
      blue, //same as "blue: blue" because we already define the constant blue
      violet,
      orange,
      green,
    };
  }

  toggleBtnBegin() {
    if (btnStart.classList.contains('hide')) {
      btnStart.classList.remove('hide');
    } else {
      btnStart.classList.add('hide');
    }
  }

  startSequence() {
    this.sequence = new Array(lastLevel).fill(0).map(n => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.sublevel = 0;
    this.showSequence();
    this.addClicks();
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

  colorToNumber(number) {
    switch (number) {
      case 'blue':
        return 0;
      case 'violet':
        return 1;
      case 'orange':
        return 2;
      case 'green':
        return 3;
    }
  }

  showSequence() {
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

  addClicks() {
    this.colors.blue.addEventListener('click', this.chooseColor);
    this.colors.violet.addEventListener('click', this.chooseColor);
    this.colors.orange.addEventListener('click', this.chooseColor);
    this.colors.green.addEventListener('click', this.chooseColor);
  }

  removeClicks() {
    this.colors.blue.removeEventListener('click', this.chooseColor);
    this.colors.violet.removeEventListener('click', this.chooseColor);
    this.colors.orange.removeEventListener('click', this.chooseColor);
    this.colors.green.removeEventListener('click', this.chooseColor);
  }

  chooseColor(ev) {
    let colorName = ev.target.dataset.color;
    let numberColor = this.colorToNumber(colorName);
    this.lightUpColor(colorName);
    if (numberColor === this.sequence[this.sublevel]) {
      this.sublevel++;
      if (this.sublevel === this.level) {
        this.level++;
        this.removeClicks();
        if (this.level === lastLevel + 1) {
          this.winGame();
        } else {
          setTimeout(this.nextLevel, 1500);
        }
      }
    } else {
      this.loseGame();
    }
  }

  winGame () {
    swal('Simon Game', 'Congratulations you complete the game!', 'success')
    .then(this.begin.bind(this));
  }

  loseGame () {
    swal('Simon Game', 'Sorry you lose the game!', 'error')
    .then(() => {
      this.removeClicks();
      this.begin();
    });
  }
}

function startGame() {
  let game = new Game();
}

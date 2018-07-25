// const HanoiGame = require('./game.js');

class View {
  constructor(game, domEl) {
    this.game = game;
    this.domEl = domEl;
    domEl.append(this.setupTowers());
  }
  setupTowers() {
    const towersRepresentation = $("<ul></ul>");
    for (let i = 0; i < 2; i++) {
      towersRepresentation.append($("<li></li>"));
    }
    return towersRepresentation;
  }
  render() {
    const ul = $("ul");
    const towers = this.game.towers;
    for (let i = 0; i < 2; i++) {
      const li = ul.eq(i);
      const tower = towers[i];
    }
    
  }
}



module.exports = View;
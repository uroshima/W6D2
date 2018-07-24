// const Game = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.boardContainer = $el;
    $el.append(this.setupBoard());
    this.bindEvents();
  }

  bindEvents() {
    const moves = $("li");
    for (let i = 0; i < moves.length; i++) {
      const li = moves.eq(i);
      li.on("click", () => {
        this.makeMove(li);
      });
    }
  }

  makeMove($square) {
    if (this.game.board.isEmptyPos($square.data("pos"))) {
      $square.text(this.game.currentPlayer); 
      this.game.playMove($square.data("pos"));
      $square.addClass("chosen");
      $square.removeClass("unselected");
    } else {
      alert("This move is not valid");
    }

    if (this.game.isOver()) {
      const moves = $("li");
      const winner = this.game.winner();
      for (let i = 0; i < moves.length; i++) {
        const li = moves.eq(i);
        if (winner === li.text()) {
          li.addClass("winner");
        } else {
          li.addClass("loser");
          li.removeClass("unselected");
        }
        li.off("click");
      }
      const body = $("body");
      body.append(`<h2>You win, ${winner}!</h2>`);
    }
  }

  setupBoard() {
    const board = $("<ul></ul>");
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = $("<li></li>");
        li.addClass("unselected");
        li.data("pos", [i, j]);
        board.append(li);
      }
    }
    return board;
  }
}

module.exports = View;

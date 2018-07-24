const View = require('./ttt-view.js');
const Game = require('./game.js');

$( () => {
  const gridContainer = $('.ttt');
  const game = new Game();
  const view = new View(game, gridContainer);
});


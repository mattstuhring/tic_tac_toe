const game1 = 'xxxooxxoo'; // horizontal x win, row 1
const game2 = 'xxoxoxxoo'; // vertical x win, column 1
const game3 = 'xoxoxooxx'; // back diagnol x win
const game4 = 'xoxoxoxxo'; // forward diagnol x win

// HORIZONTAL win
// 0,1,2
// 3,4,5
// 6,7,8

// VERTICAL win
// 0,3,6
// 1,4,7
// 2,5,8

// BACK DIAGNOL win
// 0,4,8

// FORWARD DIAGNOL win
// 2,4,6

const ticTacToe = function(game) {
  const xWin = 'xxx';
  const oWin = 'ooo';

  // HORIZONTAL
  let pos1 = '';
  let row = 1;
  for (let i = 0; i <= game.length; i++) {
    if (pos1 === xWin) {
      return `Winner: x, Row: ${row}`;
    }

    if (pos1 === oWin) {
      return  `Winner: o, Row: ${row}`;
    }

     if (pos1.length === 3) {
      pos1 = '';
      row++;
    }

    pos1 += game[i];
  }

  // VERTICAL
  let column = 0;
  while (column <= 2) {
    let pos2 = '';

    for (let i = column; i <= game.length; i += 3) {
      pos2 += game[i];

      if (pos2 === xWin) {
        return `Winner: x, Column: ${column + 1}`;
      }

      if (pos2 === oWin) {
        return `Winner: o, Column: ${column + 1}`;
      }

      if (pos2.length === 3) {
        pos2 = '';
      }
    }

    column++;
  }

  // BACKWARD DIAGNOL
  const pos3 = game[0] + game[4] + game[8];
  if (pos3 === xWin) {
    return 'Winner: x';
  } else if (pos3 === oWin) {
    return 'Winner: o';
  }

  // FORWARD DIAGNOL
  const pos4 = game[2] + game[4] + game[6];
  if (pos4 === xWin) {
    return 'Winner: x';
  } else if (pos4 === oWin) {
    return 'Winner: o';
  }

  return 'Winner: TIE';
}

// ticTacToe(game1);
// ticTacToe(game2);
// ticTacToe(game3);
// ticTacToe(game4);

module.exports = ticTacToe;

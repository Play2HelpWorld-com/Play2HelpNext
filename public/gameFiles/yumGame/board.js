var Board = function (size) {
  var candyCounter = 0;
  this.score = 0;

  this.boardSize = size;
  this.square = new Array(this.boardSize);
  for (var i = 0; i <= this.boardSize; i++) {
    this.square[i] = [];
  }
  this.isValidLocation = function (row, col) {
    return (
      row >= 0 &&
      col >= 0 &&
      row <= this.boardSize &&
      col <= this.boardSize &&
      row == Math.round(row) &&
      col == Math.round(col)
    );
  };
  this.isEmptyLocation = function (row, col) {
    if (this.getCandyAt(row, col)) {
      return false;
    }
    return true;
  };

  this.doAutoMove = function () {
    var move = rules.getRandomValidMove();
    var toCandy = board.getCandyInDirection(move.candy, move.direction);
    this.flipCandies(move.candy, toCandy);
  };

  this.getSize = function () {
    return this.boardSize;
  };

  this.getCandyAt = function (row, col) {
    if (this.isValidLocation(row, col)) {
      return this.square[row][col];
    }
  };

  this.getLocationOf = function (candy) {
    return { row: candy.row, col: candy.col };
  };

  this.getAllCandies = function () {
    var results = [];
    for (var r in this.square) {
      for (var c in this.square[r]) {
        if (this.square[r][c]) {
          results.push(this.square[r][c]);
        }
      }
    }
    return results;
  };

  this.add = function (candy, row, col, spawnRow, spawnCol) {
    if (this.isEmptyLocation(row, col)) {
      var details = {
        candy: candy,
        toRow: row,
        toCol: col,
        fromRow: spawnRow,
        fromCol: spawnCol,
      };

      candy.row = row;
      candy.col = col;

      this.square[row][col] = candy;

      $(this).triggerHandler("add", details);
    } else {
      console.log("add already found a candy at " + row + "," + col);
    }
  };

  this.moveTo = function (candy, toRow, toCol) {
    if (this.isEmptyLocation(toRow, toCol)) {
      var details = {
        candy: candy,
        toRow: toRow,
        toCol: toCol,
        fromRow: candy.row,
        fromCol: candy.col,
      };

      delete this.square[candy.row][candy.col];
      this.square[toRow][toCol] = candy;

      candy.row = toRow;
      candy.col = toCol;

      $(this).triggerHandler("move", details);
    }
  };

  this.remove = function (candy) {
    var details = {
      candy: candy,
      fromRow: candy.row,
      fromCol: candy.col,
    };
    delete this.square[candy.row][candy.col];
    candy.row = candy.col = null;
    $(this).triggerHandler("remove", details);
  };

  this.removeAt = function (row, col) {
    if (this.isEmptyLocation(row, col)) {
      console.log("removeAt found no candy at " + row + "," + col);
    } else {
      this.remove(this.square[row][col]);
    }
  };

  this.clear = function () {
    for (var r in this.square) {
      for (var c in this.square[r]) {
        if (this.square[r][c]) {
          this.removeAt(r, c);
        }
      }
    }
  };

  this.addCandy = function (color, row, col, spawnRow, spawnCol) {
    var candy = new Candy(color, candyCounter++);
    this.add(candy, row, col, spawnRow, spawnCol);
  };

  this.addRandomCandy = function (row, col, spawnRow, spawnCol) {
    var random_color = Math.floor(Math.random() * Candy.colors.length);
    var candy = new Candy(Candy.colors[random_color], candyCounter++);
    this.add(candy, row, col, spawnRow, spawnCol);
  };

  this.getCandyInDirection = function (fromCandy, direction) {
    switch (direction) {
      case "up": {
        return this.getCandyAt(fromCandy.row - 1, fromCandy.col);
      }
      case "down": {
        return this.getCandyAt(fromCandy.row + 1, fromCandy.col);
      }
      case "left": {
        return this.getCandyAt(fromCandy.row, fromCandy.col - 1);
      }
      case "right": {
        return this.getCandyAt(fromCandy.row, fromCandy.col + 1);
      }
    }
  };

  this.flipCandies = function (candy1, candy2) {
    // Swap the two candies simultaneously.
    var details1 = {
      candy: candy1,
      toRow: candy2.row,
      toCol: candy2.col,
      fromRow: candy1.row,
      fromCol: candy1.col,
    };
    var details2 = {
      candy: candy2,
      toRow: candy1.row,
      toCol: candy1.col,
      fromRow: candy2.row,
      fromCol: candy2.col,
    };
    candy1.row = details1.toRow;
    candy1.col = details1.toCol;
    this.square[details1.toRow][details1.toCol] = candy1;
    candy2.row = details2.toRow;
    candy2.col = details2.toCol;
    this.square[details2.toRow][details2.toCol] = candy2;

    // Trigger two move events.
    $(this).triggerHandler("move", details1);
    $(this).triggerHandler("move", details2);
  };

  this.resetScore = function () {
    this.score = 0;
    $(this).triggerHandler("scoreUpdate", [{ score: 0 }]);
  };

  this.incrementScore = function (candy, row, col) {
    this.score += 1;
    $(this).triggerHandler("scoreUpdate", [
      {
        score: this.score,
        candy: candy,
        row: row,
        col: col,
      },
    ]);
  };

  this.getScore = function () {
    return this.score;
  };

  this.toString = function () {
    var result = "";
    for (var r = 0; r < this.boardSize; ++r) {
      for (var c = 0; c < this.boardSize; ++c) {
        var candy = this.square[r][c];
        if (candy) {
          result += candy.toString().charAt(0) + " ";
        } else {
          result += "_ ";
        }
      }
      result += "<br/>";
    }
    return result.toString();
  };
};

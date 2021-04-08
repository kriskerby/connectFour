import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";

export default class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.winnerNumber = 0;
    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
    ];
  }
  checkforTie() {
    const full = this.columns.every((column) => {
      return column.isFull();
    });
    if (full) {
      this.winnerNumber = 3;
    }
  }
  getName() {
    if (this.winnerNumber === 1) {
      return `${this.player1} Wins!!`;
    }
    if (this.winnerNumber === 2) {
      return `${this.player2} Wins!!`;
    }
    if (this.winnerNumber === 3) {
      return `${this.player1} ties with ${this.player2}`;
    } else {
      return `${this.player1} vs. ${this.player2}`;
    }
  }
  playInColumn(columnIndex) {
    console.log(columnIndex);
    this.columns[columnIndex].add(this.currentPlayer);

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    this.checkforTie();
    this.checkForCoulumnWin();
    this.checkForRowWin();
  }
  checkForCoulumnWin() {
    if (this.winnerNumber !== 0) {
      return;
    }
    for (let i = 0; i < this.columns.length; i++) {
      let ele = this.columns[i];
      let inspected = new ColumnWinInspector(ele);
      let winner = inspected.inspect();

      if (winner === 1 || winner === 2) {
        this.winnerNumber = winner;
      }
    }
  }
  checkForRowWin(){
    if (this.winnerNumber !== 0) {
        return;
      }
  }
  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }
}

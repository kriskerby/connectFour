export class Column {
  constructor() {
    this.tokens = [null, null, null, null, null, null];
  }
  add(playerNumber) {
    for (let i = this.tokens.length - 1; i >= 0; i--) {
      if (this.tokens[i] === null) {
        this.tokens[i] = playerNumber;
        break;
      }
    }
  }
  getTokenAt(rowIndex) {
    return this.tokens[rowIndex];
  }
  isFull() {
    if (this.tokens[0] !== null) {
      return true;
    }
  }
  isColumnFull(columnIndex, winnerNumber) {
    //   console.log(this.winnerNumber);
    if (winnerNumber === 1 || winnerNumber === 2) {
      return true;
    }
    return this.isFull();
  }
}

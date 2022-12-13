const { Tree } = require("./tree");

class Forest {
  /**
   * A function to get the grid in rows
   *
   * @param {string} input
   */
  constructor(input) {
    this.input = input;
    this.rows = this.getRows();
    this.cols = this.getColumns();
    this.currentTree = this.getCurrentTree();
  }

  /**
   *
   * @returns {array}
   */
  getRows() {
    return this.input.split("\n").map((row) => row.split(""));
  }

  /**
   * A function to get the grid in columns
   *
   * @returns {array}
   */
  getColumns() {
    const columns = [];
    for (let i = 0; i < this.rows.length; i += 1) {
      const row = this.rows[i];

      for (let j = 0; j < row.length; j += 1) {
        if (!columns[j]) {
          columns[j] = [];
        }
        columns[j].push(row[j]);
      }
    }
    return columns;
  }

  /**
   * A function to get the current tree by posX and posY
   *
   * @param {int} x
   * @param {int} y
   *
   * @returns {Tree}
   */
  getCurrentTree(x = 0, y = 0) {
    return new Tree(x, y, this.rows[y], this.cols[x]);
  }

  /**
   * A function to move to the next tree by posX and posY
   *
   * @param {int} x
   * @param {int} y
   */
  move(x = 0, y = 0) {
    this.currentTree = this.getCurrentTree(x, y);
  }
}

module.exports = {
  Forest,
};

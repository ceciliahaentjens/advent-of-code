/**
 * @param {posX} int
 * @param {posY} int
 * @param {row} array
 * @param {col} array
 */
class Tree {
  constructor(posX, posY, row, col) {
    this.posX = posX;
    this.posY = posY;
    this.row = row;
    this.col = col;
    this.value = row[posX];
    this.neighbours = this.getNeighbours();
  }

  /**
   * To know if a tree is higher than a range of trees
   *
   * @param {array} trees
   * @returns {bool}
   */
  isHigher(trees) {
    return trees.every((tree) => tree < this.value);
  }

  /**
   * To know if a tree is visible from an edge
   *
   * @returns {bool}
   */
  isVisible() {
    const { left, right, up, down } = this.neighbours;

    return (
      !left.length ||
      !right.length ||
      !up.length ||
      !down.length ||
      this.isHigher(left) ||
      this.isHigher(right) ||
      this.isHigher(up) ||
      this.isHigher(down)
    );
  }

  /**
   * To get neighbours of the current tree
   *
   * @returns {object}
   */
  getNeighbours() {
    const { posX, posY, row, col } = this;
    const left = row.slice(0, posX);
    const right = row.slice(posX + 1, row.length);
    const up = col.slice(0, posY);
    const down = col.slice(posY + 1, col.length);

    return {
      left,
      right,
      up,
      down,
    };
  }

  /**
   * To get the viewing distance of a tree in a given range
   *
   * @param {array} trees
   * @returns {int}
   */
  getViewingDistance(trees) {
    let i;
    // Loop through trees from the reference tree
    for (i = 0; i < trees.length; i += 1) {
      if (trees[i] >= this.value) {
        return i + 1;
      }
    }
    return i;
  }

  /**
   * A function to get the score of a tree
   *
   * @returns {int}
   */
  getScenicScore() {
    const rightScore = this.getViewingDistance(this.neighbours.right);
    const downScore = this.getViewingDistance(this.neighbours.down);

    // We take the reverse array for left and up because we need to be
    // from the point of view of the central tree
    const leftScore = this.getViewingDistance(this.neighbours.left.reverse());
    const upScore = this.getViewingDistance(this.neighbours.up.reverse());

    return rightScore * downScore * leftScore * upScore;
  }
}

module.exports = {
  Tree,
};

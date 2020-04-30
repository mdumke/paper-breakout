// Breakout bricks management

const bricks = {
  pattern: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],

  removeByIndex: i => {
    if (i < bricks.pattern.length) {
      bricks.pattern[i] = 0
    }
  },

  removeByPosition: ({ x, y }) =>
    bricks.removeByIndex(bricks.positionToIndex({ x, y })),

  indexToColRow: i => ({
    col: i % config.bricks.nCols,
    row: Math.floor(i / config.bricks.nCols)
  }),

  colRowToIndex: ({ col, row }) => {
    return row * config.bricks.nCols + col
  },

  positionToColRow: ({ x, y }) => ({
    col: Math.floor((x - field.getLeft()) / config.bricks.width),
    row: Math.floor((y - field.getTop()) / config.bricks.height)
  }),

  positionToIndex: ({ x, y }) =>
    bricks.colRowToIndex(bricks.positionToColRow({ x, y })),

  brickAt: ({ col, row }) => {
    const i = bricks.colRowToIndex({ col, row })
    return i < bricks.pattern.length && bricks.pattern[i] !== 0
  },

  noBrickAt: ({ col, row }) => !bricks.brickAt({ col, row })
}

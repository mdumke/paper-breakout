// Breakout bricks management

const bricks = {
  pattern: null,
  amountLeft: null,

  removeByIndex: i => {
    // bricks of type 2 are never deleted
    if (i < bricks.pattern.length && bricks.pattern[i] !== 2) {
      bricks.pattern[i] = 0
      bricks.amountLeft--
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

  noBrickAt: ({ col, row }) => !bricks.brickAt({ col, row }),

  playSoundByPosition: ({ x, y }) => {
    const i = bricks.positionToIndex({ x, y })

    if (i >= bricks.pattern.length) {
      return
    }

    switch (bricks.pattern[i]) {
    case 0:
      break
    case 1:
      audio.playCelloKey()
      break
    case 2:
      audio.playPianoKey()
      break
    }
  },

  setLevel: n => {
    bricks.pattern = config.bricks.levels[n].slice(0)
    bricks.amountLeft = bricks.pattern.reduce((memo, e) =>
      e === 0 || e === 2 ? memo : memo + 1
    )
  }
}

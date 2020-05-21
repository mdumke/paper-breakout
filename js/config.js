// Game elemnts configuration

const config = {
  maxLives: 3,

  ball: {
    initialSpeedX: 0.05,
    initialSpeedY: 0.5,
    rotation: 0.002
  },

  paddle: {
    margin: 50,
    width: 96,
    height: 30,
    speed: 0.57,
    distAccel: 0.009
  },

  bricks: {
    width: 80,
    height: 54,
    nCols: 10,
    nRows: 5,
    nLevels: 3,
    levels: {
      1: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      2: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 2, 2, 2, 2, 2, 2, 0, 0,
      ],
      3: [
        1, 2, 1, 1, 1, 1, 1, 1, 2, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 2, 1, 1, 1, 1, 1, 1, 2, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 2, 1, 1, 1, 1, 1, 1, 2, 1,
      ]
    }
  },

  field: {
    x: 220,
    y: 126,
    width: 800,
    height: 600,
  }
}

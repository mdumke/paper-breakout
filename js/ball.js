// breakout ball handling

const ball = {
  x: null,
  y: null,
  angle: 0,
  speedX: null,
  speedY: null,

  touchesPaddle: () => {
    return (
      ball.x > paddle.x - config.paddle.width / 2 &&
      ball.x < paddle.x + config.paddle.width / 2 &&
      ball.y > paddle.y - config.paddle.height / 2 &&
      ball.y < paddle.y + config.paddle.height / 2
    )
  },

  isOnField: () => (
    ball.x > field.getLeft() &&
    ball.x < field.getRight() &&
    ball.y > field.getTop()
  ),

  touchesBrick: () => {
    const i = bricks.positionToIndex(ball)
    const brickExists = i < bricks.pattern.length && bricks.pattern[i] !== 0
    return ball.isOnField() && brickExists
  },

  update: (deltaT, prevDeltaT) => {
    if (ball.x < field.getLeft()) {
      ball.bounceOffLeftWall()
    }
    if (ball.x > field.getRight()) {
      ball.bounceOffRightWall()
    }
    if (ball.y < field.getTop()) {
      ball.bounceOffCeiling()
    }
    if (ball.touchesPaddle()) {
      game.ballTouchesPaddle()
      ball.bounceOffPaddle()
    }
    if (ball.touchesBrick()) {
      ball.bounceOffBrick(prevDeltaT)
      bricks.removeByPosition(ball)
    }
    if (ball.y > canvas.height + 20) {
      return game.ballLost()
    }

    ball.advance(deltaT)
  },

  bounceOffBrick: prevDeltaT => {
    bricks.playSoundByPosition(ball)

    const { col, row } = bricks.positionToColRow(ball)
    const previous = ball.getPreviousPosition(prevDeltaT)
    const colChange = previous.col !== col
    const rowChange = previous.row !== row
    const adjCol = { row, col: previous.col }
    const adjRow = { row: previous.row, col }

    if (colChange && bricks.noBrickAt(adjCol)) {
      ball.speedX *= -1
    }

    if (rowChange && bricks.noBrickAt(adjRow)) {
      ball.speedY *= -1
    }

    if (colChange && rowChange &&
        bricks.brickAt(adjRow) && bricks.brickAt(adjCol)) {
      ball.speedX *= -1
      ball.speedY *= -1
    }
  },

  getPreviousPosition: prevDeltaT => {
    return bricks.positionToColRow({
      x: ball.x - prevDeltaT * ball.speedX,
      y: ball.y - prevDeltaT * ball.speedY
    })
  },

  bounceOffLeftWall: () => {
    ball.speedX = Math.abs(ball.speedX)
    audio.play('wall')
  },

  bounceOffRightWall: () => {
    ball.speedX = -Math.abs(ball.speedX)
    audio.play('wall')
  },

  bounceOffCeiling: () => {
    ball.speedY = Math.abs(ball.speedY)
    audio.play('wall')
  },

  bounceOffPaddle: () => {
    ball.speedY = -Math.abs(ball.speedY)
    ball.speedX = (ball.x - paddle.x) * config.paddle.distAccel
  },

  advance: deltaT => {
    ball.x += deltaT * ball.speedX
    ball.y += deltaT * ball.speedY
    ball.angle += deltaT * config.ball.rotation
  },

  reset: (x, y, speedX, speedY) => {
    ball.x = x
    ball.y = y
    ball.speedX = speedX
    ball.speedY = speedY
    ball.angle = 0
  }
}

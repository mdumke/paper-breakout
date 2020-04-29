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

  touchesBrick: () => {
    const i = bricks.positionToIndex(ball)
    const ballOnField = ball.x > 0 && ball.x < canvas.width && ball.y > 0
    const brickExists = i < bricks.pattern.length && bricks.pattern[i] !== 0
    return ballOnField && brickExists
  },

  update: deltaT => {
    if (ball.x < 0) {
      ball.bounceOffLeftWall()
    }
    if (ball.x > canvas.width) {
      ball.bounceOffRightWall()
    }
    if (ball.y < 0) {
      ball.bounceOffCeiling()
    }
    if (ball.touchesPaddle()) {
      ball.bounceOffPaddle()
    }
    if (ball.touchesBrick()) {
      bricks.removeByPosition(ball)
      ball.bounceOffBrick(deltaT)
    }
    if (ball.y > canvas.height) {
      return game.ballLost()
    }

    ball.advance(deltaT)
  },

  bounceOffBrick: prevDeltaT => {
    const { col, row } = bricks.positionToColRow(ball)

    const previous = bricks.positionToColRow({
      x: ball.x - prevDeltaT * ball.speedX,
      y: ball.y - prevDeltaT * ball.speedY
    })

    const colChange = previous.col !== col
    const rowChange = previous.row !== row

    if (colChange && bricks.noBrickAt({ row, col: previous.col })) {
      ball.speedX *= -1
    }

    if (rowChange && bricks.noBrickAt({ row: previous.row, col })) {
      ball.speedY *= -1
    }

    if (colChange && rowChange) {
      const adjacentInRow = bricks.colRowToIndex({ row, col: previous.col })
      const adjacentInCol = bricks.colRowToIndex({ row: previous.row, col })

      if (bricks[adjacentInRow] && bricks[adjacentInCol]) {
        ball.speedX *= -1
        ball.speedY *= -1
      }
    }
  },

  bounceOffLeftWall: () => {
    ball.speedX = Math.abs(ball.speedX)
  },

  bounceOffRightWall: () => {
    ball.speedX = -Math.abs(ball.speedX)
  },

  bounceOffCeiling: () => {
    ball.speedY = Math.abs(ball.speedY)
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

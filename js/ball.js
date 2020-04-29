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
    if (ball.y > canvas.height) {
      return game.ballLost()
    }

    ball.advance(deltaT)
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

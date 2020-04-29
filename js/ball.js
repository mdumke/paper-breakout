// breakout ball handling

const ball = {
  x: null,
  y: null,
  angle: 0,
  speedX: null,
  speedY: null,

  config: {
    rotation: 0.001
  },

  update: deltaT => {
    if (ball.x < 0) {
      ball.speedX = Math.abs(ball.speedX)
    }
    if (ball.x > canvas.getWidth()) {
      ball.speedX = -Math.abs(ball.speedX)
    }
    if (ball.y < 0) {
      ball.speedY = Math.abs(ball.speedY)
    }
    if (ball.y > canvas.getHeight()) {
      ball.speedY = -Math.abs(ball.speedY)
    }

    ball.advance()
  },

  advance: () => {
    ball.x += deltaT * ball.speedX
    ball.y += deltaT * ball.speedY
    ball.angle += deltaT * ball.config.rotation
  },

  reset: (x, y, speedX, speedY) => {
    ball.x = x
    ball.y = y
    ball.speedX = speedX
    ball.speedY = speedY
    ball.angle = 0
  }
}

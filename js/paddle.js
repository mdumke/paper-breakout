// Breakout paddle handling

const paddle = {
  x: null,
  y: null,

  update: deltaT => {
    if (controls.moveRight && paddle.x < canvas.width) {
      paddle.x += deltaT * config.paddle.speed
    }
    if (controls.moveLeft && paddle.x > 0) {
      paddle.x -= deltaT * config.paddle.speed
    }
  },

  reset: x => {
    paddle.x = x
  },

  init: () => {
    paddle.y = canvas.height - config.paddle.margin
  }
}

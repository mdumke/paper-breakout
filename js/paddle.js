// Breakout paddle handling

const paddle = {
  x: null,
  y: null,

  update: deltaT => {
    const canMoveRight = paddle.x < field.getRight() - config.paddle.width / 2
    const canMoveLeft = paddle.x > field.getLeft() + config.paddle.width / 2

    if (controls.moveRight && canMoveRight) {
      paddle.x += deltaT * config.paddle.speed
    }
    if (controls.moveLeft && canMoveLeft) {
      paddle.x -= deltaT * config.paddle.speed
    }
  },

  reset: x => {
    paddle.x = x
  },

  init: () => {
    paddle.y = field.getBottom() - config.paddle.margin
  }
}

// breakout graphics display management

const graphics = {
  drawBall: () => {
    canvas.drawImage(images.ball, ball.x, ball.y, ball.angle)
  },

  drawPaddle: () => {
    canvas.drawImage(
      images.paddle,
      paddle.x,
      field.getBottom() - config.paddle.margin,
      Math.PI * 3 / 2
    )
  },

  drawBrick: (col, row, type) => {
    canvas.drawImage(
      images[`brick${type}`],
      field.getLeft() + col * config.bricks.width + config.bricks.width / 2,
      field.getTop() + row * config.bricks.height + config.bricks.height / 2
    )
  },

  drawBricks: () => {
    for (let i = 0; i < bricks.pattern.length; i++) {
      if (bricks.pattern[i] !== 0) {
        const { col, row } = bricks.indexToColRow(i)
        graphics.drawBrick(col, row, bricks.pattern[i])
      }
    }
  },

  drawCheats: () => {
    canvas.drawText(`${cheats.x},${cheats.y}`, 10, 10,
      'gray', 12, 'monospace')
  },

  drawGame: () => {
    canvas.clear()
    graphics.drawBricks()
    graphics.drawPaddle()
    graphics.drawBall()
    graphics.drawCheats()
  },

  init: () => {
    canvas.init()
  }
}

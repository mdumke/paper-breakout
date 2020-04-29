// breakout graphics display management

const graphics = {
  drawBall: () => {
    canvas.drawImage(images.ball, ball.x, ball.y, ball.angle)
  },

  drawPaddle: () => {
    canvas.drawImage(
      images.paddle,
      paddle.x,
      canvas.height - config.paddle.margin,
      Math.PI * 3 / 2
    )
  },

  drawBrick: (col, row) => {
    canvas.drawRect(
      col * config.bricks.width,
      row * config.bricks.height,
      config.bricks.width - 1,
      config.bricks.height - 1,
      'lightblue'
    )
  },

  drawBricks: () => {
    for (let i = 0; i < bricks.pattern.length; i++) {
      if (bricks.pattern[i] === 1) {
        const { col, row } = bricks.indexToColRow(i)
        graphics.drawBrick(col, row)
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

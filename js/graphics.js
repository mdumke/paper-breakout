// breakout graphics display management

const graphics = {
  levelInfo: null,

  drawLoadingMessage: () => {
    canvas.drawText('Loading...', 200, 200, '#444', 20, 'monospace')
  },

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

  drawTitle: () => {
    canvas.clear()
    canvas.drawImage(images.title, 620, 420)
    canvas.drawImage(images.controlsLeft, 493, 568)
    canvas.drawImage(images.controlsRight, 627, 568)
  },

  drawWin: () => {
    canvas.clear()
    canvas.drawImage(images.congratulations, 620, 320)
  },

  drawGameOver: () => {
    canvas.clear()
    canvas.drawImage(images.gameOver, 620, 320)
  },

  drawSpacebar: () => {
    canvas.drawImage(images.spacebar, 620, 790)
  },

  drawLevelInfo: n => {
    canvas.drawImage(images[`level${n}`], 620, 420)
  },

  showLevelInfo: n => {
    graphics.levelInfo = n
  },

  hideLevelInfo: () => {
    graphics.levelInfo = null
  },

  drawLives: () => {
    const n = ['zero', 'one', 'two'][game.lives]
    canvas.drawImage(images[n], 1150, 700)
  },

  drawLevel: () => {
    canvas.clear()
    graphics.drawBricks()
    graphics.drawPaddle()
    graphics.drawBall()
    graphics.drawLives()
    if (graphics.levelInfo !== null) {
      graphics.drawLevelInfo(graphics.levelInfo)
    }
  }
}

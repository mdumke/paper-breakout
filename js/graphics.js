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

  drawCheats: () => {
    canvas.drawText(`${cheats.x},${cheats.y}`, cheats.x, cheats.y,
      'gray', 12, 'monospace')
  },

  drawGame: () => {
    canvas.clear()
    graphics.drawPaddle()
    graphics.drawBall()
    graphics.drawCheats()
  },

  init: () => {
    canvas.init()
  }
}

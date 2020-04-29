// breakout graphics display management

const graphics = {
  drawBall: () => {
    canvas.drawImage(images.ball, ball.x, ball.y, ball.angle)
  },

  drawGame: () => {
    canvas.clear()
    graphics.drawBall()
  },

  init: () => {
    canvas.init()
  }
}

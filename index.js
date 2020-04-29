// Breakout central game logic

const cheats = {
  x: 0,
  y: 0
}

const game = {
  state: {
    prevTime: 0
  },

  update: time => {
    const diff = time - game.state.prevTime
    const deltaT = isNaN(diff) ? 0 : diff
    ball.update(deltaT)
    paddle.update(deltaT)
    game.state.prevTime = time
  },

  ballLost: () => {
    ball.reset(
      canvas.width / 2,
      canvas.height / 2,
      config.ball.initialSpeedX,
      config.ball.initialSpeedY
    )
  },

  draw: () => {
    graphics.drawGame()
  },

  animate: time => {
    requestAnimationFrame(game.animate)
    game.update(time)
    game.draw()
  },

  reset: () => {
    ball.reset(
      canvas.width / 2,
      canvas.height / 2,
      config.ball.initialSpeedX,
      config.ball.initialSpeedY
    )
    paddle.reset(canvas.width / 2)
  },

  init: async () => {
    graphics.init()
    paddle.init()
    controls.init()
    await images.load()
  },

  main: async () => {
    await game.init()
    game.reset()
    game.animate()
  }
}

// Breakout central game logic

const game = {
  state: {
    prevTime: 0
  },

  update: time => {
    const diff = time - game.state.prevTime
    const deltaT = isNaN(diff) ? 0 : diff
    ball.update(deltaT)
    game.state.prevTime = time
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
      canvas.getWidth() / 2,
      canvas.getHeight() / 2,
      6/16,
      5/16
    )
  },

  init: async () => {
    controls.init()
    graphics.init()
    await images.load()
  },

  main: async () => {
    await game.init()
    game.reset()
    game.animate()
  }
}

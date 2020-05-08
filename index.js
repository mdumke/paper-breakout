// Breakout central game logic

const cheats = {
  x: 0,
  y: 0
}

const game = {
  animation: null,
  screen: null,
  level: null,
  lives: null,
  pauseBall: null,

  timing: {
    prevFrameTime: 0
  },

  spacebarPressed: () => {
    if (game.screen === 'title') {
      game.level = 1
      game.runLevel()
    }

    if (game.screen === 'win' || game.screen === 'over') {
      game.level = null
      game.displayTitle()
    }
  },

  over: () => {
    game.stopAnimation()
    setTimeout(() => game.displayOver(), 500)
  },

  ballLost: () => {
    if (game.lives === 0) {
      return game.over()
    }

    game.lives--

    ball.reset(
      canvas.width / 2,
      canvas.height / 2,
      config.ball.initialSpeedX,
      config.ball.initialSpeedY
    )

    game.pauseBall = true
    setTimeout(() => game.pauseBall = false, 1000)
  },

  ballTouchesPaddle: () => {
    if (bricks.amountLeft === 0) {
      game.stopAnimation()
      game.level++

      if (game.level > config.bricks.nLevels) {
        setTimeout(() => game.displayWin(), 1000)
      } else {
        setTimeout(() => game.runLevel(), 1000)
      }
    }
  },

  displayTitle: () => {
    game.screen = 'title'
    graphics.drawTitle()
    setTimeout(() => {
      if (game.screen === 'title') {
        graphics.drawSpacebar()
      }
    }, 3000)
  },

  displayWin: () => {
    game.screen = 'win'
    graphics.drawWin()
    setTimeout(() => {
      if (game.screen === 'win') {
        graphics.drawSpacebar()
      }
    }, 3000)
  },

  displayOver: () => {
    game.screen = 'over'
    graphics.drawGameOver()
    setTimeout(() => {
      if (game.screen === 'over') {
        graphics.drawSpacebar()
      }
    }, 3000)
  },

  runLevel: () => {
    game.screen = `level${game.level}`
    bricks.setLevel(game.level)
    game.reset()
    graphics.drawLevel()
    graphics.drawLevelInfo(game.level)
    setTimeout(graphics.drawLevel, 1500)
    setTimeout(game.animate, 2000)
  },

  getDeltaT: time => {
    const diff = time - game.timing.prevFrameTime
    const deltaT = isNaN(diff) ? 0 : diff
    game.timing.prevFrameTime = time
    return deltaT
  },

  update: deltaT => {
    if (!game.pauseBall) {
      ball.update(deltaT)
    }
    paddle.update(deltaT)
  },

  animate: time => {
    game.animation = requestAnimationFrame(game.animate)
    game.update(game.getDeltaT(time))
    graphics.drawLevel()
  },

  stopAnimation: () => {
    cancelAnimationFrame(game.animation)
  },

  reset: () => {
    game.lives = config.maxLives - 1
    ball.reset(
      canvas.width / 2,
      canvas.height / 2,
      config.ball.initialSpeedX,
      config.ball.initialSpeedY
    )
    paddle.reset(canvas.width / 2)
  },

  init: async () => {
    canvas.init()
    paddle.init()
    controls.init()
    await images.load()
  },

  main: async () => {
    await game.init()
    game.displayTitle()
  }
}

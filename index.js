// Breakout central game logic

const game = {
  animation: null,
  screen: null,
  level: null,
  lives: null,
  pauseBall: null,

  timing: {
    prevFrameTime: 0,
    prevDeltaT: 0
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
    audio.play('ballLost')

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
    audio.play('paddle')

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
    audio.play('title')
    graphics.drawTitle()
    setTimeout(() => {
      if (game.screen === 'title') {
        graphics.drawSpacebar()
      }
    }, 3000)
  },

  displayWin: () => {
    game.screen = 'win'
    audio.play('applause')
    graphics.drawWin()
    setTimeout(() => {
      if (game.screen === 'win') {
        graphics.drawSpacebar()
      }
    }, 5000)
  },

  displayOver: () => {
    game.screen = 'over'
    audio.play('over')
    graphics.drawGameOver()
    setTimeout(() => {
      if (game.screen === 'over') {
        graphics.drawSpacebar()
      }
    }, 5000)
  },

  runLevel: () => {
    if (game.level === 1) {
      game.lives = config.maxLives - 1
    }

    game.screen = `level${game.level}`
    bricks.setLevel(game.level)
    game.reset()
    graphics.showLevelInfo(game.level)
    game.pauseBall = true
    game.animate()
    setTimeout(() => {
      graphics.hideLevelInfo()
      setTimeout(() => {
        game.pauseBall = false
      }, 500)
    }, 1500)
  },

  getDeltaT: time => {
    const diff = time - game.timing.prevFrameTime
    const deltaT = isNaN(diff) ? 0 : diff
    const prevDeltaT = game.timing.prevDeltaT
    game.timing.prevFrameTime = time
    game.timing.prevDeltaT = deltaT
    return [deltaT, prevDeltaT]
  },

  update: time => {
    const [deltaT, prevDeltaT] = game.getDeltaT(time)

    if (!game.pauseBall) {
      ball.update(deltaT, prevDeltaT)
    }
    paddle.update(deltaT)
  },

  animate: time => {
    game.animation = requestAnimationFrame(game.animate)
    game.update(time)
    graphics.drawLevel()
  },

  stopAnimation: () => {
    cancelAnimationFrame(game.animation)
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
    canvas.init()
    paddle.init()
    controls.init()
    graphics.drawLoadingMessage()
    await images.load()
  },

  main: async () => {
    await game.init()
    game.displayTitle()
  }
}

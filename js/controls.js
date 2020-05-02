// Breakout keyboard contols

const ARROW_LEFT = 37
const ARROW_RIGHT = 39
const SPACE = 32

const controls = {
  moveLeft: false,
  moveRight: false,

  handleKeyDown: e => {
    if (e.keyCode === ARROW_LEFT) {
      e.preventDefault()
      controls.moveLeft = true
    }

    if (e.keyCode === ARROW_RIGHT) {
      e.preventDefault()
      controls.moveRight = true
    }

    if (e.keyCode === SPACE) {
      e.preventDefault()
      game.spacebarPressed()
    }
  },

  handleKeyUp: e => {
    if (e.keyCode === ARROW_LEFT) {
      e.preventDefault()
      controls.moveLeft = false
    }

    if (e.keyCode === ARROW_RIGHT) {
      e.preventDefault()
      controls.moveRight = false
    }
  },

  // cheats
  handleMouseMove: evt => {
    const rect = canvas.el.getBoundingClientRect()
    const root = document.documentElement
    const x = evt.clientX - rect.left - root.scrollLeft
    const y = evt.clientY - rect.top - root.scrollTop
    const { col, row } = bricks.positionToColRow({ x, y })
    cheats.x = col
    cheats.y = row
    ball.x = x
    ball.y = y
    ball.speedX = 0.1
    ball.speedY = 0.1
  },

  init: () => {
    document.addEventListener('keydown', controls.handleKeyDown)
    document.addEventListener('keyup', controls.handleKeyUp)

    // cheats
    canvas.el.addEventListener('mousemove', controls.handleMouseMove)
  }
}

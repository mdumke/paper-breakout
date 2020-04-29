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

  init: () => {
    document.addEventListener('keydown', controls.handleKeyDown)
    document.addEventListener('keyup', controls.handleKeyUp)
  }
}

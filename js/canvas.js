// canvas-related graphics functionality

const canvas = {
  el: null,
  ctx: null,
  width: null,
  height: null,
  wrapper: null,

  clear: () => {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
  },

  drawText: (text, x, y, color, size, fontFamily) => {
    canvas.ctx.fillStyle = color
    canvas.ctx.font = `${size}px ${fontFamily}`
    canvas.ctx.fillText(text, x, y)
  },

  drawImage: (img, x, y, angle) => {
    canvas.ctx.save()
    canvas.ctx.translate(x, y)
    canvas.ctx.rotate(angle)
    canvas.ctx.drawImage(img, -img.width/2, -img.height/2)
    canvas.ctx.restore()
  },

  drawRect: (x, y, w, h, color, alpha) => {
    canvas.ctx.globalAlpha = alpha || 1
    canvas.ctx.fillStyle = color
    canvas.ctx.fillRect(x, y, w, h)
    canvas.ctx.globalAlpha = 1.0
  },

  init: () => {
    canvas.wrapper = document.querySelector('.canvas-wrapper')
    const element = document.querySelector('#canvas')
    canvas.el = element
    canvas.ctx = element.getContext('2d')
    canvas.width = canvas.el.width
    canvas.height = canvas.el.height
  }
}

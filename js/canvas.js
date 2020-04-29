// canvas-related graphics functionality

const canvas = {
  el: null,
  ctx: null,
  width: null,
  height: null,

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

  init: () => {
    const element = document.querySelector('#canvas')
    canvas.el = element
    canvas.ctx = element.getContext('2d')
    canvas.width = canvas.el.width
    canvas.height = canvas.el.height
  }
}

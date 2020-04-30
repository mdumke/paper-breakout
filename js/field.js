// geometry of the playing field

const field = {
  getLeft: () => config.field.x,
  getRight: () => config.field.x + config.field.width,
  getTop: () => config.field.y,
  getBottom: () => config.field.y + config.field.height
}

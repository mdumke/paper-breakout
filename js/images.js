// breakout image management

const images = {
  basePath: 'assets/images',

  list: [
    { name: 'ball', fileName: 'ball.png' },
    { name: 'paddle', fileName: 'paddle.png' },
    { name: 'level1', fileName: 'level1.png' },
    { name: 'level2', fileName: 'level2.png' },
    { name: 'level3', fileName: 'level3.png' },
    { name: 'zero', fileName: 'zero.png' },
    { name: 'one', fileName: 'one.png' },
    { name: 'two', fileName: 'two.png' },
    { name: 'brick1', fileName: 'brick1.png' },
    { name: 'brick2', fileName: 'brick2.png' },
    { name: 'controlsLeft', fileName: 'controls-left.png' },
    { name: 'controlsRight', fileName: 'controls-right.png' },
    { name: 'spacebar', fileName: 'spacebar.png' },
    { name: 'title', fileName: 'title.png' },
    { name: 'background', fileName: 'background.png' },
    { name: 'congratulations', fileName: 'congratulations.png' },
    { name: 'gameOver', fileName: 'game-over.png' }
  ],

  load: () => {
    return Promise.all(images.list.map(img =>
      new Promise(resolve => {
        images[img.name] = document.createElement('img')
        images[img.name].onload = resolve
        images[img.name].fileName = img.fileName
        images[img.name].src = `${images.basePath}/${img.fileName}`
      })
    ))
  }
}

// breakout image management

const images = {
  basePath: 'assets/images',

  list: [
    { name: 'ball', fileName: 'ball.png' },
    { name: 'paddle', fileName: 'paddle.png' },
    { name: 'brick1', fileName: 'brick1.png' },
    { name: 'brick2', fileName: 'brick2.png' },
    { name: 'brick3', fileName: 'brick3.png' },
    { name: 'brick4', fileName: 'brick4.png' },
    { name: 'brick5', fileName: 'brick5.png' }
  ],

  load: () => {
    return Promise.all(images.list.map(img =>
      new Promise(resolve => {
        images[img.name] = document.createElement('img')
        images[img.name].onload = resolve
        images[img.name].src = `${images.basePath}/${img.fileName}`
      })
    ))
  }
}

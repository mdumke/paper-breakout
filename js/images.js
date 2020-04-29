// breakout image management

const images = {
  basePath: 'assets/images',

  list: [
    { name: 'ball', fileName: 'ball.png' }
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

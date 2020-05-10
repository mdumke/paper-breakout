// pong audio handling

const audio = {
  soundOn: true,
  prevCelloKey: -1,
  prevPianoKey: -1,

  init: () => {
    audio.sounds.birds.loop = true
  },

  play: name => {
    if (!audio.sounds[name]) {
      return console.log(`${name} not found`)
    }

    if (audio.soundOn) {
      const sound = audio.sounds[name]
      sound.currentTime = 0
      sound.play()
    }
  },

  playCelloKey: () => {
    const keys = [
      'cello1',
      'cello2',
      'cello3',
      'cello4',
    ]

    // play keys round robin style
    const key = (audio.prevCelloKey + 1) % keys.length
    audio.play(keys[key])
    audio.prevCelloKey = key
  },

  playPianoKey: () => {
    const keys = [
      'piano1',
      'piano2',
      'piano3',
      'piano4',
      'piano5'
    ]

    // play keys round robin style
    const key = (audio.prevPianoKey + 1) % keys.length
    audio.play(keys[key])
    audio.prevPianoKey = key
  },

  pause: name => {
    audio.sounds[name].pause()
  },

  sounds: {
    ballLost: document.querySelector('#ball-lost'),
    paddle: document.querySelector('#paddle'),
    wall: document.querySelector('#wall'),
    title: document.querySelector('#title'),
    over: document.querySelector('#over'),
    applause: document.querySelector('#applause'),
    birds: document.querySelector('#birds'),
    piano1: document.querySelector('#piano1'),
    piano2: document.querySelector('#piano2'),
    piano3: document.querySelector('#piano3'),
    piano4: document.querySelector('#piano4'),
    piano5: document.querySelector('#piano5'),
    cello1: document.querySelector('#cello1'),
    cello2: document.querySelector('#cello2'),
    cello3: document.querySelector('#cello3'),
    cello4: document.querySelector('#cello4'),
  }
}

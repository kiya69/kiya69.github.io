var config = {
  baseUrl: 'portfolio/terminal-stores',
  backgroundColor: 'rgb(200, 200, 200)',
  zoomDistance: {
    init: 150,
    min: 150,
    max: 300
  },
  orbitAngle: {
    min: 0,
    max: Math.PI / 2
  },
  model: {
    url: './data/ionic/model.js'
  },
  progress: {
    current: 0
  },
  cards: {
    url: '/data/ionic/cards/',
    json: 'cards.json',
    key: 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1YvF9U7nR3VqzaivHjKV8Yh9QrfCfILUnZc9O1A3-er0&output=html'
  },
  groups: {
    url: './data/ionic/cards/',
    json: 'floors.json'
  }
};
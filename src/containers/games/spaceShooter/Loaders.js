import {world1} from './levels/world1'
import SpriteSheet from './SpriteSheet.js'

export function loadImage(url) {
  return new Promise(resolve => {
    const img = new Image()
    window.addEventListener('load', () => {
      resolve(img)
    })
    img.src = url
  })
}

export function loadLevel(name, world) {
  switch (world) {
    case 1:
      return world1[name]
    case 2:
      return world1[name]
    default:

  }
}

export function loadBackgroundSprites(tileSet) {
  return loadImage(tileSet)
  .then(img => {
    const sprites = new SpriteSheet(img, 16, 16)
    sprites.defineTile('ground', 0, 0,)
    sprites.defineTile('sky', 3, 23,)
    return sprites
  })
}

export function loadCharSprites(tileSet) {
  return loadImage(tileSet)
  .then(img => {
    const sprites = new SpriteSheet(img, 16, 16)
    sprites.define('idle', 276, 44, 16, 16)
    return sprites
  })
}

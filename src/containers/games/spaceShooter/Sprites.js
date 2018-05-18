import SpriteSheet from './SpriteSheet.js'
import {loadImage} from './Loaders.js'

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

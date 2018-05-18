import {world1} from './levels/world1'
import Level from './levels/Level.js'

import {
  createBackgroundLayer,
  createCharLayer,
} from './Layers.js'
import {
  createCharacter
} from './Entities.js'
import {
  loadBackgroundSprites,
} from './Sprites.js'

const tileSet = require('../../../img/games/spaceShooter/tileset.png')
const characterSet = require('../../../img/games/spaceShooter/character.gif')

export function loadImage(url) {
  return new Promise(resolve => {
    const img = new Image()
    window.addEventListener('load', () => {
      resolve(img)
    })
    img.src = url
  })
}

function createTiles(level, backgrounds){
  backgrounds.forEach(background => {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
      for(let x = x1; x < x2; x++){
        for(let y = y1; y < y2; y++){
            level.tiles.set(x, y, {name: background.tile})
        }
      }
    })
  })
}


export function loadLevel(name, world, context, size) {
  let levelSpec

  const level = new Level()

  levelSpec = world1[name]
  return Promise.all([
    loadBackgroundSprites(tileSet),
  ])
  .then(([backgroundSprites]) => {

    createTiles(level, levelSpec.backgrounds)

    const backgroundLayer = createBackgroundLayer(level, context, backgroundSprites, size)
    level.comp.layers.push(backgroundLayer)

    const charLayer = createCharLayer(level.entities, context)
    level.comp.layers.push(charLayer)

    return level
  })
}

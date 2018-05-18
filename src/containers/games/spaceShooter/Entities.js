import Entity from './Entity.js'
import Velocity from './traits/Velocity'
import Jump from './traits/Jump'
import Move from './traits/Move'

import {
  loadCharSprites,
} from './Sprites.js'

export function createCharacter(tileSet) {
  return loadCharSprites(tileSet)
  .then(sprite => {
    const char = new Entity()
    char.size.set(14, 16)
    char.addTrait(new Move())
    char.addTrait(new Jump())
    char.draw = function drawChar(context) {
      sprite.draw('idle', context, 0, 0)
    }
    return char
  })
}

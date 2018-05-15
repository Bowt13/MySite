import {drawBackground} from './Drawers.js'

export function createBackgroundLayer(backgrounds, context, sprites, size){
  const buffer = document.createElement('canvas')
  const bufferContext = buffer.getContext('2d')
  buffer.width = size.width*16
  buffer.height = size.height*16
  drawBackground(backgrounds, bufferContext, sprites)
  return function drawBackgroundLayer(context){
    context.drawImage(buffer, 0, 0)
  }
}

export function createCharLayer(sprite, pos, context) {
  return function drawSpriteLayer(context){
    for (let i = 0; i < 20; i++ ){
    sprite.draw('idle', context, pos['x']+(i*16), pos['y'])}
  }
}

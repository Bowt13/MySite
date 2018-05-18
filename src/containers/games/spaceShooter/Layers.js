
export function createBackgroundLayer(level, context, sprites, size){
  const buffer = document.createElement('canvas')
  const bufferContext = buffer.getContext('2d')
  buffer.width = size.width*7.2
  buffer.height = size.height*7.2

  level.tiles.forEach((tile, x, y) => {
    sprites.drawTile(tile.name, bufferContext, x, y)
  })
  return function drawBackgroundLayer(context, camera){
    context.drawImage(buffer, -camera.pos.x, -camera.pos.y)
  }
}

export function createCharLayer(entities, context, width = 64, height = 64) {
  const spriteBuffer = document.createElement('canvas')
  const spriteBufferContext = spriteBuffer.getContext('2d')
  spriteBuffer.width = width
  spriteBuffer.height = height
  return function drawSpriteLayer(context, camera){
    entities.forEach(entity => {
      spriteBufferContext.clearRect(0, 0, width, height)
      entity.draw(spriteBufferContext)
      context.drawImage(
        spriteBuffer,
        entity.pos.x - camera.pos.x,
        entity.pos.y - camera.pos.y,
      )
    })
  }
}

export function createCollisionLayer(level) {
  const resolvedTiles = []
  const tileResolver = level.tileCollider.tiles
  const tileSize = tileResolver.tileSize
  const getByIndexOriginal = tileResolver.getByIndex
  tileResolver.getByIndex = function getByIndexFake(x,y) {
    resolvedTiles.push({x, y})
    return getByIndexOriginal.call(tileResolver, x, y)
  }
  return function drawCollisions(context) {
    context.strokeStyle = 'red'
    resolvedTiles.forEach(({x, y}) => {
      context.beginPath()
      context.rect(x * tileSize, y * tileSize, tileSize, tileSize)
      context.stroke()
    })
    context.strokeStyle = 'blue'
    level.entities.forEach(entity => {
      context.beginPath()
      context.rect(entity.pos.x, entity.pos.y, entity.size.x, entity.size.y)
      context.stroke()
    })
    resolvedTiles.lenght = 0
  }
}

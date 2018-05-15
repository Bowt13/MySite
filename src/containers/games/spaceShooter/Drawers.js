export function drawBackground(backgrounds, context, sprites) {
  backgrounds.forEach((background) => {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
      for(let x = x1; x < x2; x++){
        for(let y = y1; y < y2; y++){
          sprites.drawTile(background.tile, context, x, y)
        }
      }
    })
  })
}

export function drawGame(pos, context, sprites, comp){
  function update() {
    comp.draw(context)
    sprites.draw('idle', context, pos.x, pos.y)
    pos.x += 3
    pos.y += 3
    requestAnimationFrame(update)
  }
  update()
}

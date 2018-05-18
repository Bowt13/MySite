import Timer from './Timer.js'

export function drawGame(context, level, camera){
  const timer = new Timer(1/60)
  timer.update = function update(deltaTime){
    level.update(deltaTime)
    level.comp.draw(context, camera)
  }
  timer.start()
}

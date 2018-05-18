import Keyboard from './KeyboardState.js'

export function setupKeyboard(entity) {
  const RIGHT = 39
  const LEFT =  37
  const SPACE = 32
  const input = new Keyboard()
  input.addMapping(SPACE, keyState => {
    if(keyState) {
      entity.jump.start()
    } else {
      entity.jump.cancel()
    }
  })
  input.addMapping(RIGHT, keyState => {
    entity.move.direction = keyState
  })
  input.addMapping(LEFT, keyState => {
    entity.move.direction = -keyState
  })
  input.listenTo(window)
}

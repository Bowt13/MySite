import React, {PureComponent} from 'react'

//Styling
  import './Game.css'
//Classes
  import SpriteSheet from './SpriteSheet.js'
  import Compositor from './Compositor.js'
  import Camera from './Camera.js'

//Functions
  import {
    loadImage,
    loadLevel,
    loadBackgroundSprites,
  } from './Loaders.js'
  import {
    drawGame,
  } from './Drawers.js'
  import {
    createBackgroundLayer,
    createCharLayer,
    createCollisionLayer,
  } from './Layers.js'
  import {
    createCharacter
  } from './Entities.js'
  import {
    setupKeyboard
  } from './Input.js'

class SpaceShooter extends PureComponent {
  state = {
    levels: 1,
    world: 1,
    canvasHeight: '100',
    canvasWidth: '100',
  }

  initCanvas = () => {
    const game = document.getElementById('game')
    this.setState({
      canvasHeight: game.offsetHeight,
      canvasWidth: game.offsetWidth,
    })
  }

  componentDidMount () {
    this.initCanvas()
    const tileSet = require('../../../img/games/spaceShooter/tileset.png')
    const characterSet = require('../../../img/games/spaceShooter/character.gif')
    const {levels, world, canvasWidth, canvasHeight} = this.state
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    Promise.all([
      loadLevel(`level${levels}`, world, context, {width: canvasWidth, height: canvasHeight}),
      createCharacter(characterSet),
    ])
    .then(([level, char, something]) => {
      const camera = new Camera()
      window.camera = camera
      char.pos.set(0, 0)
      level.comp.layers.push(createCollisionLayer(level))
      level.entities.add(char)
      const input = setupKeyboard(char)
      drawGame(context, level, camera)
    })
  }

  render() {
    const {canvasWidth, canvasHeight} = this.state
    return (
      <div className='game' id='game'>
        <canvas id='canvas' height={canvasHeight} width={canvasWidth}></canvas>
      </div>
    );
  }
}

export default SpaceShooter;

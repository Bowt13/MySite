import React, {PureComponent} from 'react'

//Styling
  import './Game.css'
//Classes
  import SpriteSheet from './SpriteSheet.js'
  import Compositor from './Compositor.js'
//Functions
  import {
    loadImage,
    loadLevel,
    loadBackgroundSprites,
    loadCharSprites,
  } from './Loaders.js'
  import {
    drawGame,
  } from './Drawers.js'
  import {
    createBackgroundLayer,
    createCharLayer,
  } from './Layers.js'

class SpaceShooter extends PureComponent {
  state = {
    level: 2,
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
    const {level, world, canvasWidth, canvasHeight} = this.state
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const charPos = {
      x: 0,
      y: 0,
    }

    Promise.all([
      loadBackgroundSprites(tileSet),
      loadCharSprites(characterSet),
      loadLevel(`level${level}`, world)
    ])
    .then(([backgroundSprites, charSprites, level]) => {
      const comp = new Compositor()
      const backgroundLayer = createBackgroundLayer(level.backgrounds, context, backgroundSprites, {width: canvasWidth, height: canvasHeight})
      const charLayer = createCharLayer(charSprites, charPos)
      comp.layers.push(backgroundLayer)
      comp.layers.push(charLayer)
      drawGame(charPos, context, charSprites, comp)
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

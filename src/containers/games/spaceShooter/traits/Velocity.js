import {Trait} from '../Entity.js'

export default class Velocity extends Trait {
  constructor(){
    super('velocity')
    this.gravity = 2000
  }

  update(entity, deltaTime){
      
  }
}

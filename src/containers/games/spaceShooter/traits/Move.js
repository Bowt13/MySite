import {Trait} from '../Entity.js'

export default class Move extends Trait {
  constructor(){
    super('move')

    this.direction = 0
    this.speed = 9000
  }
  update(entity, deltaTime){
    entity.vel.x = this.speed * this.direction * deltaTime
  }
}

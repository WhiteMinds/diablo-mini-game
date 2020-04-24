import { Energy, Entity, Resistances } from './entity'

export class Monster implements Entity {
  name: string

  constructor() {
    console.log('new monster')
    this.name = 'fallen'
  }

  /** 生命值 */
  health: Energy = {
    current: 1,
    get max() {
      return 1
    },
    get regen() {
      return 0
    },
  }

  /** 各项抗性 */
  get resistance(): Resistances {
    return {
      fire: 0,
      cold: 0,
      lightning: 0,
      poison: 0,
      physical: 0,
      magic: 0,
    }
  }
}

import { Energy, Entity, Resistances } from './entity'
import { Character } from '@/models/character'

/** 属性 */
export interface Attributes {
  /** 力量 */
  strength: number
  /** 敏捷 */
  dexterity: number
  /** 体力 */
  vitality: number
  /** 能量 */
  energy: number
}

interface NumberRange {
  min: number
  max: number
}

export class Player implements Entity {
  name: string
  character: Character

  constructor() {
    console.log('new character')
    this.name = 'test'
    this.character = Character.Barbarian
  }

  /** 各项属性 */
  attributes: Attributes = {
    strength: 5,
    dexterity: 5,
    vitality: 5,
    energy: 5,
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

  /** 法力值 */
  get mana(): Energy {
    return {
      current: 1,
      max: 1,
      regen: 0,
    }
  }

  /** 体力值 */
  get stamina(): Energy {
    return {
      current: 1,
      max: 1,
      regen: 0,
    }
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

  /** 命中率 */
  attackRating?: number

  damage: {
    melee: NumberRange
    ranged: NumberRange
    spell: NumberRange
  } = {
    melee: {
      min: 1,
      max: 12,
    },
    ranged: {
      min: 1,
      max: 12,
    },
    spell: {
      min: 1,
      max: 12,
    },
  }
}

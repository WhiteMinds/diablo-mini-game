import { Entity } from '@/models/entity'

export interface GameLog {
  type: string
}

export namespace GameLog {
  export interface CombatStart extends GameLog {
    type: 'CombatStart'
    /** 挑战者 */
    challenger: Entity
    /** 被挑战者 */
    challenged: Entity
  }

  export interface CombatAttack extends GameLog {
    type: 'CombatAttack'
    /** 攻击者 */
    attacker: Entity
    /** 被攻击者 */
    attacked: Entity
  }
}

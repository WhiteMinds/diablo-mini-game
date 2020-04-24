/** 抗性 */
export interface Resistances {
  /** 火焰抵抗 */
  fire: number
  /** 冰冷抵抗 */
  cold: number
  /** 闪电抵抗 */
  lightning: number
  /** 毒素抵抗 */
  poison: number
  /** 物理抵抗 */
  physical: number
  /** 魔法抵抗 */
  magic: number
}

/** 能量 */
export interface Energy {
  /** 当前值 */
  current: number
  /** 最大值 */
  max: number
  /** 恢复速率 */
  regen?: number
}

export interface Entity {
  /** 名称 */
  name: string

  /** 生命值 */
  health: Energy

  /** 抗性 */
  resistance: Resistances
}

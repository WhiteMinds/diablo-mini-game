import { Player } from '@/models/player'
import { Monster } from '@/models/monster'
import { Item } from '@/models/item'
import { GameLog } from '@/models/game_log'

interface CombatResult {
  logs: GameLog[]
  getLoot: () => Item[]
}

export function combat(player: Player, monster: Monster): CombatResult {
  console.log('combat', player, monster)

  const logs: GameLog[] = []
  logs.push({
    type: 'CombatStart',
    challenger: player,
    challenged: monster,
  } as GameLog.CombatStart)

  return {
    logs,
    getLoot: () => [],
  }
}

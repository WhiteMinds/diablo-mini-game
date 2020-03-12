import { EntityTemplates } from './entity_templates'
import { MapDifficulty } from '@/const'

export const BloodMoor = {
  name: '鲜血荒地',
  EntityTemplates,
  areaLevel: {
    [MapDifficulty.Normal]: 1,
    [MapDifficulty.Nightmare]: 36,
    [MapDifficulty.Hell]: 67,
    [MapDifficulty.Epic]: 95,
    [MapDifficulty.Mythical]: 110,
  },
}

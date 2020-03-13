import { MapDifficulty } from '@/const'

export const BloodMoor = {
  name: '鲜血荒地',
  EntityTemplates: [require('@/entity_templates/Fallen')],
  areaLevel: {
    [MapDifficulty.Normal]: 1,
    [MapDifficulty.Nightmare]: 36,
    [MapDifficulty.Hell]: 67,
    [MapDifficulty.Epic]: 95,
    [MapDifficulty.Mythical]: 110,
  },
}

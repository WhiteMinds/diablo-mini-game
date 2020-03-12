export interface EntityTemplate {
  name: string
}

export interface GameMap {
  name: string
  EntityTemplates: EntityTemplate[]
  areaLevelMap: {
    [difficulty: number]: number
  }
  areaLevel: number
}

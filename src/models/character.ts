export class Character {
  skills = []

  constructor(public name: string) {}

  /** 狂战士 */
  static Barbarian = new Character('Barbarian')
  /** 死灵法师 */
  static Assassin = new Character('Assassin')
}

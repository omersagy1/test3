export { Character, AiBehavior }

class Character {

  // TODO: allow images to be provided and named.
  constructor(
    name: string,
    color: string,
    behavior: AiBehavior) {
  }

}

enum AiBehavior {
  WAIT,
  PACE,
  FLEE
}
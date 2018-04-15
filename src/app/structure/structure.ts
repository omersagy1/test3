import { Character } from "./character"

export { Scene, Entry, Narration, Dialogue, Fork, Choice, Consequence }

class Scene {

  constructor(
    entries: Entry[],
    characters: Character[]) {
  }

}

class Entry {

  constructor(
    id: number = 1) {
  }

}

class Narration extends Entry {

  constructor(
    text: string) {
   super(); 
  }

}

class Dialogue extends Entry {

  constructor(
    speaker: string,
    text: string) {
    super();
  }

}

class Fork extends Entry {

  constructor(
    choices: Choice[]) {
    super();
  }

}

class Choice {

  constructor(
    text: string,
    consequence: Consequence) {}

}

class Consequence {

  constructor(
    text: string) {}

}

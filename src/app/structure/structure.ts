import { Character } from "./character"

export { Scene, Entry, Narration, Dialogue, Fork, Choice, Consequence }

class Scene {

  constructor(
    entries: Entry[],
    characters: Character[]) {
  }

}

class Entry {

  static next_id: number = 0;

  id: number = 0;

  constructor() {
    this.id = Entry.next_id;
    Entry.next_id++;
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
    entries: Entry[]) {}

}

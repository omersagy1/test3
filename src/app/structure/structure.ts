export { Entry, Narration, Dialogue, Fork, Choice, Consequence }

class Entry {

  constructor(
    public id: number = 1,
    public next?: Entry) {
  }

}

class Narration extends Entry {

  constructor(
    public text: string) {
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

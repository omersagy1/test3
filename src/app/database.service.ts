import { Injectable } from '@angular/core';

import { Character } from './structure/character';
import { Scene } from './structure/structure';
import { Event } from './structure/event';

@Injectable()
export class DatabaseService {

  database: Database;

  constructor() {
    this.database = new Database();
  }

  ngOnInit() {
    // TODO: figure out how to initialize database here?
  }

  get characters(): Character[] {
    return this.database.characters.slice();
  }

  addCharacter(c: Character) {
    this.database.characters.push(c);
  }

  deleteCharacter(c: Character) {
    let index = this.database.characters.indexOf(c);
    this.database.characters.splice(index);
  }

}


class Database {

  constructor(
    public characters: Character[] = [],
    public scenes: Scene[] = [],
    public events: Event[] = []) {}

}

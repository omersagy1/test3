import { Injectable } from '@angular/core';

import { Character } from './structure/character';
import { Scene } from './structure/structure';
import { Event } from './structure/event';

@Injectable()
export class DatabaseService {

  database: Database;

  constructor() {}

  ngOnInit() {
    this.database = new Database();
  }

}


class Database {

  constructor(
    characters: Character[] = [],
    scenes: Scene[] = [],
    events: Event[] = []) {}

}

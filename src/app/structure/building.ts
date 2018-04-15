export { Building }

import { Character } from "./character"

class Building {

  floors: Floor[];

  constructor(
    num_floors: number,
    windows_per_floor: number) {

    this.floors = [];
    for(let i = 0; i < num_floors; i++) {
      this.floors.push(new Floor(windows_per_floor));
    }
  }
  
}


class Floor {

  cells: Cell[];

  constructor(
    num_cells: number) {

    this.cells = [];
    for (let i = 0; i < num_cells; i++) {
      this.cells.push(new Cell());
    }
  }

}


class Cell {

  characters: Character[]

  constructor() {}

}
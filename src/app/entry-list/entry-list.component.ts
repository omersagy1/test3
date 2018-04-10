import { Component, OnInit } from '@angular/core';

class Entry {

  constructor(
    public id: number,
    public next: Entry) {}

}

class Narration {

  constructor(
    public text: string) {}

}

class Dialogue {

  constructor(
    speaker: string,
    text: string) {}

}

class Fork {

  constructor(
    choices: Choice[]) {}

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

@Component({
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  narrations: Narration[];

  constructor() { 

    this.narrations = [];

  }

  addNarration(): void {
    this.narrations.push(new Narration("hello"));
  }

  deleteNarration(i: number): void {
    this.narrations.splice(i, 1);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

class Entry {

  id: number;
  next: Entry;

}

class Narration {

  text: string;

}

class Dialogue {

  speaker: string;
  text: string;

}

class Fork {

  choices: Choice[];

}

class Choice {

  text: string;
  consequence: Consequence;

}

class Consequence {

  text: string;

}

@Component({
  selector: 'narrative-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  narrations: Narration[];

  constructor() { 

    this.narrations = [];

  }

  addEntry(): void {
    this.narrations.push(new Narration());
  }

  deleteEntry(i: number): void {
    this.narrations.splice(i, 1);
  }

  ngOnInit() {
  }

}

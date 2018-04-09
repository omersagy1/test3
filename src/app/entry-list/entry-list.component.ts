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
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

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

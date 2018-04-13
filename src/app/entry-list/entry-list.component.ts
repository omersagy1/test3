import { Component, OnInit } from '@angular/core';
import { Entry, Narration, Dialogue, Fork } from '../structure/structure'
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[];

  constructor() { 

    this.entries = [];

  }

  addNarration(): void {
    this.entries.push(new Narration("hello"));
  }

  addDialogue(): void {
    this.entries.push(new Dialogue("Bob", "Yo!"));
  }

  deleteEntry(i: number): void {
    this.entries.splice(i, 1);
  }

  isNarration(e: Entry): boolean {
    return e instanceof Narration;
  }

  isDialogue(e: Entry): boolean {
    return e instanceof Dialogue;
  }

  isFork(e: Entry): boolean {
    return e instanceof Fork;
  }

  ngOnInit() {
  }

}

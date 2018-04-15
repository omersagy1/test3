import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'
import { Character } from '../structure/character'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.characters = this.databaseService.characters;
  }

  deleteCharacter(i: number): void {
    this.databaseService.deleteCharacter(this.characters[i]);
    this.characters.splice(i, 1);
  }

}

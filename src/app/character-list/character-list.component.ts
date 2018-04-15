import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'
import { Character, AiBehavior } from '../structure/character'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(private database_service: DatabaseService) {}

  ngOnInit() {
    this.characters = this.database_service.characters;
  }

  addCharacter(): void {
    this.characters.push(
      new Character(
        "fake-name",
        "red",
        AiBehavior.WAIT));
  }

  deleteCharacter(i: number): void {
    this.database_service.deleteCharacter(this.characters[i]);
    this.characters.splice(i, 1);
  }

}

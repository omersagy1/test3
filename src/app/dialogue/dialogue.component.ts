import { Component, OnInit, Input } from '@angular/core';
import { Dialogue } from '../structure/structure';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  @Input() dialogue: Dialogue;

  constructor() { }

  ngOnInit() {
  }

}

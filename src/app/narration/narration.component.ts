import { Component, OnInit, Input } from '@angular/core';
import { Narration } from '../structure/structure'

@Component({
  selector: 'app-narration',
  templateUrl: './narration.component.html',
  styleUrls: ['./narration.component.css']
})
export class NarrationComponent implements OnInit {

  @Input() narration: Narration;

  constructor() { }

  ngOnInit() {
  }

}

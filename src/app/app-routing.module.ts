import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component'
import { EntryListComponent } from './entry-list/entry-list.component'

const routes: Routes = [
  { path: 'characters', component: CharacterListComponent },
  { path: 'dialogue', component: EntryListComponent } 
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

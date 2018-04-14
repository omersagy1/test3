import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'heroes', component: CharacterList }
];


@NgModule({
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

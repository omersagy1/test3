import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { NarrationComponent } from './narration/narration.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { ForkComponent } from './fork/fork.component';

import { AppRoutingModule } from './/app-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';

import { DatabaseService } from './database.service'


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    NarrationComponent,
    DialogueComponent,
    ForkComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

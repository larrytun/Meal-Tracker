import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { EntryListComponent } from './entry-list.component';
import { EditEntryComponent } from './edit-entry.component';
import { NewEntryComponent } from './new-entry.component';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EntryListComponent,
    EditEntryComponent,
    NewEntryComponent,
    CaloriesPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

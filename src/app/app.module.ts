import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { PlayerNameComponent } from './player-name/player-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    PlayerNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

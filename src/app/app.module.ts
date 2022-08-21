import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxWigModule } from 'ngx-wig';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [AppComponent, EditorComponent],
  imports: [BrowserModule, AppRoutingModule, NgxWigModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

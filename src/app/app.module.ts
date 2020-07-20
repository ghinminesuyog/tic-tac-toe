import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { BoardComponent } from './board/board.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoardComponent,
    DialogComponent
  ], entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatButtonModule, 
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

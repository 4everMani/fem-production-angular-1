import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@fem/core-data';
import { HttpClientModule } from '@angular/common/http';
import { UiToolbarModule } from '@fem/ui-toolbar';
import { MaterialModule } from '@fem/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreDataModule,
    UiToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

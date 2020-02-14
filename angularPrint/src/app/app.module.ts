import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { MyDocumentComponent } from './my-document/my-document.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    MyDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

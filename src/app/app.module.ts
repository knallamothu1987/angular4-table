import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// import our module
import { Angular4TableModule } from './modules/angular4-table/angular4-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular4TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { HelloEnComponent, HelloTwComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DynamicModule.withComponents([HelloEnComponent, HelloTwComponent])],
  declarations: [AppComponent, HelloEnComponent, HelloTwComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


// REF: https://github.com/gund/ng-dynamic-component
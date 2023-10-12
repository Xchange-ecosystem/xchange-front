import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardInsightsModule, CardTasksIndicatorModule, CarButtonViewModule, MainHeadingModule } from 'projects/ngx-xchange-ui/src/public-api';
import {  TagModule } from 'ngx-xchange-ui';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CardInsightsModule,
    CarButtonViewModule,
    TagModule,
    CardTasksIndicatorModule,
    CarButtonViewModule,
    MainHeadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

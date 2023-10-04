import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardInsightsModule, TittleDirective } from 'projects/ngx-xchange-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    TittleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CardInsightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

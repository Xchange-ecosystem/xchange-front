import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardInsightsModule, CardTasksIndicatorModule, CarButtonViewModule } from 'projects/ngx-xchange-ui/src/public-api';


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
    CardTasksIndicatorModule,
    CarButtonViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

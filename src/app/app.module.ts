import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { CardInsightsModule } from 'projects/ngx-xchange-ui/src/public-api';
import { CardDeadlineIndicatorModule } from 'ngx-xchange-ui';

=======
import { CardInsightsModule, TittleDirective } from 'projects/ngx-xchange-ui/src/public-api';
>>>>>>> feature/createLibrary

@NgModule({
  declarations: [
    AppComponent,
    TittleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CardInsightsModule,
    CardDeadlineIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

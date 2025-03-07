import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavigatorUsersFilterModule, CardInsightsModule, CardTasksIndicatorModule, CarButtonViewModule, AsideNavModule, ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';
import { LoginComponent } from './pages/login/login.component';

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
    AsideNavModule,
    ProjectProgressBarModule,
    NavigatorUsersFilterModule,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

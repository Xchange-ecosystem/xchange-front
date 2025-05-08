import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavigatorUsersFilterModule, CardInsightsModule, CardTasksIndicatorModule, CarButtonViewModule, ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';
import { CommunityComponent } from "./pages/community/community.component";
import {MainHeadingModule} from "../../projects/ngx-xchange-ui/src/directives/main-heading/main-heading.module";
import { NewAsideNavComponent } from 'projects/ngx-xchange-ui/src/components/new-aside-nav/new-aside-nav.component';
import { RouterOutlet } from '@angular/router';


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
    ProjectProgressBarModule,
    NavigatorUsersFilterModule,
    CommunityComponent,
    MainHeadingModule,
    NewAsideNavComponent,
    RouterOutlet,
    ProjectProgressBarModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

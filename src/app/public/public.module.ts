import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { ShareModule } from "../core/share/share.module";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/containers/login.componet";
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { UserNameCardComponent } from './components/user-name-card/user-name-card.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { CardDeadlineIndicatorModule } from "ngx-xchange-ui";
import { MainTitleModule } from "projects/ngx-xchange-ui/src/public-api";

@NgModule({
    imports: [
        PublicRoutingModule,
        ShareModule,
        CardDeadlineIndicatorModule,
        MainTitleModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        LoginComponent,
        HeaderCardComponent,
        UserNameCardComponent,
        UserAvatarComponent,
       
    ],
    exports: [],
    providers: []
})

export class PublicModule{
    constructor() {}
}

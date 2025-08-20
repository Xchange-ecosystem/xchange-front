import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { ShareModule } from "../core/share/share.module";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/containers/login.componet";
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { UserNameCardComponent } from './components/user-name-card/user-name-card.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { CardDeadlineIndicatorModule } from "@xchange-ecosystem/ngx-xchange-ui";
// import { InputComponent } from "./home/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavigatorUsersFilterModule } from "../../../projects/ngx-xchange-ui/src/components/navigator-users-filter/navigator-users-filter.module";
// import { UserAssessmentCardModule } from "../../../projects/ngx-xchange-ui/src/components/user-assessment-card/user-assessment-card.module"; 
@NgModule({
    imports: [
    PublicRoutingModule,
    ShareModule,
    CardDeadlineIndicatorModule,
    // InputComponent,
    ReactiveFormsModule,
    NavigatorUsersFilterModule,
    // UserAssessmentCardModule
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

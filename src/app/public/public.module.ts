import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { ShareModule } from "../core/share/share.module";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/containers/login.componet";
import { HeaderCardComponent } from './components/header-card/header-card.component';

@NgModule({
    imports: [
        PublicRoutingModule,
        ShareModule,
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        LoginComponent,
        HeaderCardComponent
    ],
    exports: [],
    providers: []
})

export class PublicModule{
    constructor() {}
}
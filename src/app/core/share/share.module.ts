import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { NotFoundComponent } from './components/not-found/not-found.component'
import { MainTitleModule } from "projects/ngx-xchange-ui/src/public-api";


@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
    ],
    declarations: [
    NotFoundComponent
  ],
    exports: [
        HttpClientModule,
        RouterModule,
        NotFoundComponent,
    ],
    providers: []
})

export class ShareModule{
    constructor() {}
}
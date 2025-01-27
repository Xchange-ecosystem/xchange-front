import { NgModule } from "@angular/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { NotFoundComponent } from './components/not-found/not-found.component'



@NgModule({ declarations: [
        NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        RouterModule,
        NotFoundComponent,
    ], imports: [RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })

export class ShareModule{
    constructor() {}
}
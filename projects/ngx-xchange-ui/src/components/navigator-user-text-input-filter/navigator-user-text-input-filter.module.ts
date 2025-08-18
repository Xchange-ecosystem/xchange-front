import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorUserTextInputFilterComponent } from './navigator-user-text-input-filter/navigator-user-text-input-filter.component';
import { XcIconCheckComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgKeyupModule } from '../../directives/ng-keyup/ng-keyup.module';



@NgModule({
  declarations: [
    NavigatorUserTextInputFilterComponent
  ],
  imports: [
    CommonModule,
    XcIconTimesComponent,
    XcIconCheckComponent,
    ReactiveFormsModule,
    FormsModule,
    NgKeyupModule
  ],
  exports: [
    NavigatorUserTextInputFilterComponent
  ]
})
export class NavigatorUserTextInputFilterModule { }

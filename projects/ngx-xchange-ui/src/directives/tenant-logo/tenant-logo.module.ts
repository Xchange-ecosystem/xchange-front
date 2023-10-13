import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantLogoDirective } from './tenant-logo.directive';



@NgModule({
  declarations: [
    TenantLogoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TenantLogoDirective
  ]
})
export class TenantLogoModule { }

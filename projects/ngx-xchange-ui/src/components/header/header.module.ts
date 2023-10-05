import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TittleDirective } from 'projects/ngx-xchange-ui/src/public-api';

@NgModule({
  declarations: [
    HeaderComponent, TittleDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }

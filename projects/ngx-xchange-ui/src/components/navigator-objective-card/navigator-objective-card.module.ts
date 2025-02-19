import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NavigatorObjectiveCardComponent } from './navigator-objective-card/navigator-objective-card.component';
import { CardTasksIndicatorModule, MainHeadingModule } from '@indziaki/ngx-xchange-ui';
import { XcIconCalendarAltComponent, XcIconFileCheckAltComponent, XcIconPaperclipComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [
    NavigatorObjectiveCardComponent
  ],
  imports: [
    CommonModule,
    CardTasksIndicatorModule,
    MainHeadingModule,
    XcIconFileCheckAltComponent,
    XcIconPaperclipComponent,
    XcIconCalendarAltComponent,
    NgClass
  ],
  exports: [
    NavigatorObjectiveCardComponent
  ]
})
export class NavigatorObjectiveCardModule { }

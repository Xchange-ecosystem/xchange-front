import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorFilterTypeSelectorComponent } from './navigator-filter-type-selector/navigator-filter-type-selector.component';
import { NavigatorFilterSelectorSwitchViewOptionModule } from '../navigator-filter-selector-switch-view-option/navigator-filter-selector-switch-view-option.module';
import { XcIconNavigatorBoardSelectionComponent, XcIconNavigatorGraphSelectionComponent, XcIconNavigatorTableSelectionComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconNavigatorComponent } from "../../../../ngx-xchange-icons/src/lib/navigator.component";



@NgModule({
  declarations: [
    NavigatorFilterTypeSelectorComponent
  ],
  imports: [
    CommonModule,
    NavigatorFilterSelectorSwitchViewOptionModule,
    XcIconNavigatorBoardSelectionComponent,
    XcIconNavigatorGraphSelectionComponent,
    XcIconNavigatorTableSelectionComponent,
    XcIconNavigatorComponent
],
  exports:[
    NavigatorFilterTypeSelectorComponent
  ]
})
export class NavigatorFilterTypeSelectorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorFilterTypeSelectorComponent } from './navigator-filter-type-selector/navigator-filter-type-selector.component';
import { XcIconNavigatorBoardSelectionComponent, XcIconNavigatorComponent, XcIconNavigatorGraphSelectionComponent, XcIconNavigatorTableSelectionComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { NavigatorFilterSelectorSwitchViewOptionModule } from '../navigator-filter-selector-switch-view-option/navigator-filter-selector-switch-view-option.module';



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

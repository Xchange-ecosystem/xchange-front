import { Component } from '@angular/core';
import { XcIconAmbulanceComponent, XcIconPlayComponent, XcIconRedoComponent } from '@indziaki/ngx-xchange-icons';
import { CopyStylesDirective, HeadlineStylesDirective, ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CopyStylesDirective,
    HeadlineStylesDirective,
    XcIconAmbulanceComponent,
    FilterComponent,
    XcIconRedoComponent,
    XcIconPlayComponent,
    ProfileTagsDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  options1 = [
    {label:"test"},
    {label:"test"},
    {label:"test"}
  ]
  options2 = [
    {label:"test"},
    {label:"test"},
    {label:"test"}
  ]
  options3 = [
    {label:"test"},
    {label:"test"},
    {label:"test"}
  ]

  optionSelected(value:any){
    console.log("seleccion hecha",value)
  }
}

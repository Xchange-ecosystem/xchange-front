import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XcIconArrowRightComponent, XcIconCheckComponent, XcIconCloseSComponent } from '@indziaki/ngx-xchange-icons';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { Headline300Directive } from 'projects/ngx-xchange-ui/src/directives/headline-300/headline-300.directive';
import { Headline500Directive } from 'projects/ngx-xchange-ui/src/directives/headline-500/headline-500.directive';
import {
  ProfileTagsDirective,
  ProjectProgressBarModule,
} from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    Headline300Directive,
    XcIconArrowRightComponent,
    ProjectProgressBarModule,
    ProfileTagsDirective,
    Headline500Directive,
    NgIf,
    XcIconCheckComponent,
    XcIconCloseSComponent,
    UserHeaderComponent
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  @Input() project: any;
  @Input() invitation: boolean = false;
  @Output() close:EventEmitter<void>=new EventEmitter<void> () 

  onCloseModal(): void {
    this.close.emit();
  }
}

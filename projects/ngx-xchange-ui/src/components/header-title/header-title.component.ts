import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XcIconCheckComponent, XcIconEditComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { HeadlineStylesDirective } from '../../directives/headline-styles/headline-styles.directive';

@Component({
  selector: 'xc-header-title',
  standalone: true,
  imports: [
    XcIconEditComponent,
    NgIf,
    CommonModule,
    FormsModule,
    XcIconTimesComponent,
    XcIconCheckComponent,
    HeadlineStylesDirective
  ],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.css'
})
export class HeaderTitleComponent {
  @Input() title: string = '';
  @Input() isEditable: boolean = false;
  @Output() titleChange = new EventEmitter<string>();

  editing = false;
  tempTitle: string = '';

  onEditClick(): void {
    this.tempTitle = this.title;
    this.editing = true;
  }

  onCancelClick(): void {
    this.editing = false;
  }

  onSaveClick(): void {
    this.title = this.tempTitle.trim();
    this.titleChange.emit(this.title);
    this.editing = false;
  }
}

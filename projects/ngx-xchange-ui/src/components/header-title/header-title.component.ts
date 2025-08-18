import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XcIconCheckComponent, XcIconEditComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';
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
export class HeaderTitleComponent implements OnInit {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() isEditable: boolean = false;
  @Output() nameChange = new EventEmitter<string>();
  @Output() lastNameChange = new EventEmitter<string>();
  public nameHolder: string = '';
  public lastNameHolder: string = '';

  ngOnInit(): void {
    this.nameHolder = this.name;
    this.lastNameHolder = this.lastName;
  }

  editing = false;

  onEditClick(): void {
    this.editing = true;
  }

  onCancelClick(): void {
    this.nameHolder = this.name;
    this.lastNameHolder = this.lastName;
    this.editing = false;
  } 

  onSaveClick(): void {
    this.name = this.nameHolder;
    this.lastName = this.lastNameHolder;
    this.nameChange.emit(this.nameHolder);
    this.lastNameChange.emit(this.lastNameHolder);
    this.editing = false;
  }
}

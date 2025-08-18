import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconHomeComponent,
} from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'xc-new-button-400',
  standalone: true,
  imports: [XcIconHomeComponent, XcIconAIComponent, NgSwitch, NgSwitchCase, NgClass],
  templateUrl: './new-button-400.component.html',
  styleUrls: ['./new-button-400.component.css'],
})
export class NewButton400Component {
  @Input() iconName: string | '' | undefined;
  isSelected = false;

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
}

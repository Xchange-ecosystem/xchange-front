import { NgClass, NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconHomeComponent,
} from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'xc-new-button-400',
  standalone: true,
  imports: [XcIconHomeComponent, XcIconAIComponent, NgSwitch,NgClass],
  templateUrl: './new-button-400.component.html',
  styleUrl: './new-button-400.component.css',
})
export class NewButton400Component {
  @Input() iconName: string | '' | undefined;
  isSelected = false;

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
}

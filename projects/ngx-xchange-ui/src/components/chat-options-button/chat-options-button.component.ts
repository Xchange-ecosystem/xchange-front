import { NgIf, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  XcIconMegaphoneComponent,
  XcIconRocketComponent,
} from '@xchange-ecosystem/ngx-xchange-icons';
import { ChatOptionDirective } from '../../directives/chat-option/chat-option.directive';

@Component({
  selector: 'xc-chat-options-button',
  standalone: true,
  imports: [CommonModule, XcIconRocketComponent, XcIconMegaphoneComponent, NgIf, NgSwitch, NgSwitchCase,ChatOptionDirective],
  templateUrl: './chat-options-button.component.html',
  styleUrls: ['./chat-options-button.component.css'],
})
export class ChatOptionsButtonComponent implements OnChanges {
  @Input() iconName: string = '';
  @Input() label: string = 'default';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['iconName']) {
    }
  }
}

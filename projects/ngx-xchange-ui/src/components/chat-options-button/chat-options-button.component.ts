import { NgIf, NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  XcIconMegaphoneComponent,
  XcIconRocketComponent,
} from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'xc-chat-options-button',
  standalone: true,
  imports: [XcIconRocketComponent, XcIconMegaphoneComponent,NgIf, NgSwitch],
  templateUrl: './chat-options-button.component.html',
  styleUrl: './chat-options-button.component.css',
})
export class ChatOptionsButtonComponent {
  @Input() iconName: string = '';
  @Input() label: string = 'default';
}

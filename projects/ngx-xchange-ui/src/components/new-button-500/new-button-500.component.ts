import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  XcIconClipboardComponent,
  XcIconMicrophoneComponent,
  XcIconRedoComponent,
  XcIconSendComponent,
} from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'xc-new-button-500',
  standalone: true,
  imports: [
    XcIconSendComponent,
    XcIconMicrophoneComponent,
    XcIconClipboardComponent,
    NgSwitch,
    XcIconRedoComponent,
    NgSwitchCase
  ],
  templateUrl: './new-button-500.component.html',
  styleUrl: './new-button-500.component.css',
})
export class NewButton500Component {
  @Input() iconName: string | '' | undefined;
}

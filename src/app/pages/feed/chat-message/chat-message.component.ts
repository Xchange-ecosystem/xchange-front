import { Component, Input } from '@angular/core';
import { RoundedImageModule } from '@xchange-ecosystem/ngx-xchange-ui';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    RoundedImageModule
  ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {
  @Input() message: string = '';
  @Input() image: string = ''; 
}

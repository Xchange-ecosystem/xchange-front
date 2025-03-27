import { Component } from '@angular/core';
import { RoundedImageModule } from 'dist/ngx-xchange-ui/public-api';

@Component({
  selector: 'xc-chat-text',
  standalone: true,
  imports: [RoundedImageModule],
  templateUrl: './chat-text.component.html',
  styleUrl: './chat-text.component.css'
})
export class ChatTextComponent {

}

import { Component } from '@angular/core';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';

@Component({
  selector: 'xc-chat-text',
  standalone: true,
  imports: [RoundedImageModule],
  templateUrl: './chat-text.component.html',
  styleUrl: './chat-text.component.css'
})
export class ChatTextComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-rounded-image',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './rounded-image.component.html',
  styleUrls: ['./rounded-image.component.css']
})
export class RoundedImageComponent {
  @Input() color?: string;
  @Input() image: string = '';
  @Input() marginSize: number = 10;
  marginSizeStr: string = ''
  constructor() {
    this.color = 'white'
    this.marginSizeStr = '10' // this.marginSize.toString()
  }
}

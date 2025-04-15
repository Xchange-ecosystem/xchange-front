import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-header-background',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './header-background.component.html',
  styleUrl: './header-background.component.css'
})
export class HeaderBackgroundComponent {
  @Input() imageUrl: string = '';

}

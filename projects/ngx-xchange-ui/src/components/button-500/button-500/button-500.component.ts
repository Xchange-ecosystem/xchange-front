import {  NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
interface ButtonType { 
  [key:string]: string;
}

@Component({
  selector: 'xc-button-500',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './button-500.component.html',
  styleUrl: './button-500.component.css'
})
export class Button500Component {
  @Input() type: string;
  @Input() description: string;
  @Input() onClick: Function;
  
  constructor() { 
    this.type = '';
    this.description = '';
    this.onClick = () => {};
  } 
  
  buttonSelector() {
    const buttonCatalog: ButtonType  = {
      '': 'rounded-lg gap-1',
      'filled_default': 'bg-Black500 text-white rounded-lg fill-white hover:bg-Black400',
      'filled_with_icon_default': 'bg-Black500 text-white rounded-lg gap-1 fill-white hover:bg-Black400',
      'filled_inactive': 'bg-Black500 text-white opacity-[0.2] rounded-lg fill-white',
      'filled_with_icon_inactive': 'bg-Black500 text-white opacity-[0.2] rounded-lg gap-1',
      'outline': 'text-Grey500 border-Grey500 rounded-lg fill-Grey500',
      'outline_with_icon_inactive': 'text-Grey500 border-Grey500 rounded-lg gap-1 fill-Grey500',
      'outline_inactive': 'opacity-[0.2] rounded-lg',
      'outline_inactive_with_icon_inactive': 'opacity-[0.2] rounded-lg gap-1',
      'round_xl_default': 'w-full h-full bg-white text-Black500 rounded-full hover:bg-Grey050 border-none fill-black',
      'round_xl_inactive': 'w-full h-full bg-white text-Black500 rounded-full border-none fill-black',
      'round_default': 'w-full h-full bg-Light_Grey text-Black500 rounded-full p-2 hover:bg-Grey200 border-none fill-black',
      'round_inactive': 'w-full h-full bg-Grey200 text-Black500 rounded-full border-none fill-black',
    }
    return buttonCatalog[this.type];
  }
}

import { Component, Input } from '@angular/core';
import { ButtonType } from 'projects/ngx-xchange-ui/src/types';

@Component({
  selector: 'xc-button-500',
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
      '': 'rounded-lg gap-1 hover:text-Grey500 hover:border-Grey500 hover:fill-Grey500 p-4',
      'outline_inactive': 'opacity-[0.2] rounded-lg hover:cursor-default gap-1 p-4',
      'filled': 'bg-Black500 text-white rounded-lg fill-white hover:bg-Black400 gap-1  p-4',
      'filled_inactive': 'bg-Black500 text-white opacity-[0.2] rounded-lg fill-white gap-1 p-4',
      'round_xl': 'w-[56px] h-[56px] bg-white text-Black500 rounded-full hover:bg-Grey050 border-none fill-black p-1',
      'round_xl_inactive': 'w-[56px] h-[56px] bg-white text-Black500 rounded-full border-none fill-black',
      'round': 'w-[38px] h-[38px] bg-Light_Grey text-Black500 rounded-full p-2 hover:bg-Grey200 border-none fill-black',
      'round_inactive': 'w-[38px] h-[38px] bg-Grey200 text-Black500 rounded-full border-none fill-black',
    }
    return buttonCatalog[this.type];
  }
}

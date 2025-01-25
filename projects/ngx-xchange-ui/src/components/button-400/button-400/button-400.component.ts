import { Component, Input } from '@angular/core';
import { ButtonType } from 'projects/ngx-xchange-ui/src/types';

@Component({
  selector: 'xc-button-400',
  templateUrl: './button-400.component.html',
  styleUrl: './button-400.component.css',
})
export class Button400Component {
  @Input() type: string;
  @Input() description: string;
  @Input() onClick: Function;

  constructor() {
    this.type = '';
    this.description = '';
    this.onClick = () => {};
  }

  buttonSelector() {
    const buttonCatalog: ButtonType = {
      '': 'rounded-lg gap-1 hover:text-Grey500 hover:border-Grey500 hover:fill-Grey500',
      'outline_inactive': 'opacity-[0.2] rounded-lg hover:cursor-default gap-1',
      'cancel': 'rounded-lg gap-1 bg-white text-Blocked border-Blocked fill-Blocked gap-1 hover:opacity-[0.6]',
      'filled': 'bg-Black500 text-white rounded-lg fill-white hover:bg-Black400 py-[10px] gap-1',
      'filled_inactive': 'bg-Black500 text-white opacity-[0.2] rounded-lg fill-white gap-1 py-[10px] hover:cursor-default',
      'round_xl': 'w-full h-full bg-white text-Black500 rounded-full hover:bg-Grey050 border-none fill-black',
      'round_xl_inactive': 'w-full h-full bg-white text-Black500 rounded-full border-none fill-black',
      'round': 'w-full h-full bg-Light_Grey text-Black500 rounded-full p-2 hover:bg-Grey200 border-none fill-black',
      'round_inactive': 'w-full h-full bg-Grey200 text-Black500 rounded-full border-none fill-black',
      'ai_button': 'rounded-lg gap-1 bg-Light_Blue_Gradient pl-[14px] hover:bg-Medium_Blue_Gradient'
    };
    return buttonCatalog[this.type];
  }
}

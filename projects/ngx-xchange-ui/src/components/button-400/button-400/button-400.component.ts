import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ButtonType } from 'projects/ngx-xchange-ui/src/types';

@Component({
  selector: 'xc-button-400',
  templateUrl: './button-400.component.html',
  styleUrl: './button-400.component.css',
})
export class Button400Component implements OnChanges {
  @Input() type: string;
  @Input() description: string;
  @Output() onClick = new EventEmitter<Event>;
  @Input() full: boolean = false;
  

  constructor() {
    this.type = '';
    this.description = '';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['type']){
      this.type = changes['type'].currentValue; 
    } 
  }

  buttonSelector() {
    const buttonCatalog: ButtonType = {
      '': 'rounded-lg gap-1 hover:text-Grey500 hover:border-Grey500 hover:fill-Grey500 p-4 hover:opacity-[0.6]',
      'outline_inactive': 'opacity-[0.2] rounded-lg hover:cursor-default gap-1 p-4',
      'cancel': 'rounded-lg gap-1 text-Blocked border-Blocked fill-Blocked gap-1 hover:opacity-[0.6] p-4',
      'cancel_filled': 'rounded-lg gap-1 text-white border-white fill-white gap-1 hover:opacity-[0.6] p-4 bg-Blocked',
      'filled': 'bg-Black500 text-white rounded-lg fill-white hover:bg-Black400 py-[10px] gap-1 p-4',
      'filled_inactive': 'bg-Black500 text-white opacity-[0.2] rounded-lg fill-white gap-1 py-[10px] hover:cursor-default p-4',
      'round_options': 'w-[30px] h-[30px] bg-Light_Grey text-Black500 rounded-full p-2 hover:bg-Grey200 border-none fill-black',
      'round_cancel': 'w-[30px] h-[30px]  bg-Light_Grey text-Black500 rounded-full p-2 hover:bg-Grey200 border-none fill-black',
      'round_checked_inactive': 'w-[34px] h-[34px]  bg-white rounded-full border-Grey300 hover:border-black',
      'round_checked': 'w-[34px] h-[34px]  rounded-full border-none bg-[var(--xc-brand-light-green)] fill-[var(--xc-categories-completed)] stroke-[var(--xc-categories-completed)]',
      'round_back': 'w-[30px] h-[30px]  text-Black500 rounded-full p-2 hover:bg-Grey200 border-none fill-black stroke-black',
      'round_back_inactive': 'w-[30px] h-[30px]  text-Grey400 rounded-full border-none fill-Grey400 stroke-Grey400',
      'ai_button': 'p-4 rounded-lg gap-1 bg-Light_Blue_Gradient pl-[14px] hover:bg-Medium_Blue_Gradient',
    };
    if(this.full){
      return `${buttonCatalog[this.type]} w-full`
    }
    return buttonCatalog[this.type];
  }
  handleClick(event: Event){
    this.onClick.emit(event)
  }
}

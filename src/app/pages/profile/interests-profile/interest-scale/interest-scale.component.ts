import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-interest-scale',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './interest-scale.component.html',
  styleUrl: './interest-scale.component.scss'
})
export class InterestScaleComponent {
   @Input() count = 5;
   @Input() selectedLevel = 0;
   @Output() levelChange = new EventEmitter<number>();
 
   get levels(): number[] {
     return Array.from({ length: this.count }, (_, i) => i + 1);
   }
 
   onSelect(level: number) {
     this.selectedLevel = level;
     this.levelChange.emit(level);
   }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'xc-check-rounded-button',
  standalone: false,
  templateUrl: './check-rounded-button.component.html',
  styleUrl: './check-rounded-button.component.css'
})
export class CheckRoundedButtonComponent {

  @Input() index: number = 0;
  @Input() statusCheck: boolean = false;
  @Output() statusCheckChange:EventEmitter<boolean> = new EventEmitter<boolean>();
}

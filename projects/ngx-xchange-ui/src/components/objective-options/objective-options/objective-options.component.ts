import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'xc-objective-options',
  standalone: false,
  templateUrl: './objective-options.component.html',
  styleUrl: './objective-options.component.css'
})
export class ObjectiveOptionsComponent {
  @Input() taskMenu: boolean = false;
  @Output() optionSelectedChange = new EventEmitter<string>()
}

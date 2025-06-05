import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-toogle',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './toogle.component.html',
  styleUrl: './toogle.component.scss'
})
export class ToogleComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Input() label = '';
  @Input() color: 'yellow' | 'purple' | 'green' = 'green';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }

  get toggleClass(): string {
    return `toggle ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} color-${this.color} size-${this.size}`;
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if ((event.key === ' ' || event.key === 'Enter') && !this.disabled) {
      event.preventDefault();
      this.toggle();
    }
  }
}

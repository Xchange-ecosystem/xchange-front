import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'xc-toggle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input() checked = false
  @Input() disabled = false
  @Input() label = ""
  @Input() color: "yellow" | "purple" | "green" = "green" 
  @Output() checkedChange = new EventEmitter<boolean>()

  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked
      this.checkedChange.emit(this.checked)
    }
  }

  get toggleClass(): string {
    return `toggle ${this.checked ? "checked" : ""} ${this.disabled ? "disabled" : ""} color-${this.color}`
  }
}

import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'xc-common-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './common-input.component.html',
  styleUrl: './common-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CommonInputComponent,
      multi: true
    }
  ]
})
export class CommonInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() success: boolean = false;
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();

  public value: string = '';
  public disabled: boolean = false;
  public touched: boolean = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  handleInput(event: Event) {
    this.markAsTouched();
    if (this.disabled) return;
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }
  markAsTouched() {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }
  writeValue(value: string): void {
    this.value = value;
  }
  handleFocus() {
    this.focus.emit();
  }
  handleBlur() {
    this.blur.emit();
  }
}

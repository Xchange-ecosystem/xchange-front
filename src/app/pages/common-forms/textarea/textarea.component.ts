import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [NgIf],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextareaComponent
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {

  value: string = '';
  disabled: boolean = false;

  onChange = (value: string) => {}

  onTouched = () => {}

  writeValue(value: string): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if(!this.touched) {
      this.onTouched();
      this.touched = true
    }
  }

  handleChange(event: Event) {
    this.markAsTouched();
    if (!this.disabled) {
      const input = event.target as HTMLTextAreaElement;
      this.value = input.value;
      this.onChange(this.value)
    }
  }
  @Input() error: boolean = false;
  @Input() errorMessage: string = 'Error por default';
  @Input() success: boolean = false;
  @Input() placeholder: string = '';
  @Input() rows: number = 4;
  @Input() cols: number = 40;
  touched = false;


}

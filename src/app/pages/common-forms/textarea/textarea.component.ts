import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [NgIf],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() error: boolean = false;
  @Input() errorMessage: string = '';
  @Input() success: boolean = false;
  @Input() placeholder: string = '';
  @Input() rows: number = 4;
  @Input() cols: number = 40;
  @Input() value: string = '';
  touched = false;


}

import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() error: boolean = false;
  @Input() errorMessage: string = 'default error text';
  @Input() success:boolean = false
  @Input() placeholder:string = ''
 }

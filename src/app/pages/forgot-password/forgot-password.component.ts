import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CopyStylesDirective, HeadlineStylesDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    HeadlineStylesDirective,
    CopyStylesDirective
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  step = 1;
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

}

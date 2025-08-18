import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CopyStylesDirective, HeadlineStylesDirective } from '@xchange-ecosystem/ngx-xchange-ui';

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
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '',
        [ Validators.required,
          Validators.pattern(this.emailRegex)
        ]
      ]
    });
  }
  
  changeStep() {
    if (this.form.valid && this.step === 1) {
      this.step++;
    }
  }
}

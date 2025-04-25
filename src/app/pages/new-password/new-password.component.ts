import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { XcIconEyeComponent, XcIconEyeSlashComponent } from '@indziaki/ngx-xchange-icons';
import { CopyStylesDirective, HeadlineStylesDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-new-password',
  standalone: true,
    imports: [
      NgIf,
      CommonModule,
      ReactiveFormsModule,
      HeadlineStylesDirective,
      CopyStylesDirective,
      XcIconEyeComponent,
      XcIconEyeSlashComponent
    ],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {
  form!: FormGroup;
  step = 1;

  showPassword = false;
  showConfirm  = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(1)]],
        confirm:  ['', [Validators.required]],
      },
      {
        validators: this.matchPasswords('password', 'confirm'),
      }
    );
  }
  
  get isPasswordValid(): boolean {
    const pwCtrl = this.form.get('password')!;
    return pwCtrl.valid && pwCtrl.touched;
  }

  private matchPasswords(
    pwKey: string,
    confirmKey: string
  ): (group: AbstractControl) => ValidationErrors | null {
    return (group: AbstractControl): ValidationErrors | null => {
      const pw  = group.get(pwKey)?.value;
      const cf  = group.get(confirmKey)?.value;
      return pw === cf ? null : { mismatch: true };
    };
  }


  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirm(): void {
    if (this.isPasswordValid) {
      this.showConfirm = !this.showConfirm;
    }
  }

  changeStep(): void {
    if (this.form.valid) {
      this.step++;
    } else {
      this.form.markAllAsTouched();
    }
  }
}

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
  showPassword    = false;
  showConfirm     = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm:  ['', [Validators.required]]
    }, {
      validators: this.matchPasswords('password', 'confirm')
    });
  

    const confirmCtrl = this.form.get('confirm')!;
    confirmCtrl.disable();
  
    this.form.get('password')!.valueChanges.subscribe(() => {
      if (this.form.get('password')!.valid) {
        confirmCtrl.enable();
      } else {
        confirmCtrl.disable();
        confirmCtrl.reset();
      }
    });
  }
  
  private matchPasswords(pwKey: string, confirmKey: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const pw    = group.get(pwKey)?.value;
      const cnf   = group.get(confirmKey)?.value;
      return pw === cnf ? null : { mismatch: true };
    };
  }

  changeStep() {
    if (this.form.valid) {
      this.step++;
      console.log('paso cambiado a', this.step);
    } else {
      this.form.markAllAsTouched();
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirm() {
    this.showConfirm = !this.showConfirm;
  }
}

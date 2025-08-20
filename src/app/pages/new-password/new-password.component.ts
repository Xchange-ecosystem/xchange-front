import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { XcIconEyeComponent, XcIconEyeSlashComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { CopyStylesDirective, HeadlineStylesDirective } from '@xchange-ecosystem/ngx-xchange-ui';

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
}

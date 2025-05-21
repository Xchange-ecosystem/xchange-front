import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { XcIconAIComponent, XcIconImageComponent } from '@indziaki/ngx-xchange-icons';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-cummon-form',
  standalone: true,
  imports: [
    XcIconAIComponent, 
    RoundedImageModule,
    NgIf,
    ReactiveFormsModule,
    XcIconImageComponent
  ],
  templateUrl: './cummon-form.component.html',
  styleUrl: './cummon-form.component.scss',
})
export class CummonFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      image: [''],
      description: ['',[Validators.required,Validators.minLength(300),Validators.maxLength(2000),],],
      linkedin: ['',[Validators.required,Validators.pattern(/^https:\/\/(www\.)?linkedin\.com\/.*$/),],],
    });
  }
  get image() {
    return this.form.get('image');
  }
  get description() {
    return this.form.get('description');
  }
  get linkedin() {
    return this.form.get('linkedin');
  }
}

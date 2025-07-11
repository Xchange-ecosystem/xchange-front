import { NgIf } from '@angular/common';
import { Component, ContentChild, inject } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [NgIf],
  template: `<ng-content></ng-content> <p class="textarea__error-message" *ngIf="error">{{ errorMessage() }}</p> {{error}}`,
  styleUrl: './form-field.component.css',
})
export class FormFieldComponent {
  public formGroupDirective = inject(FormGroupDirective, {optional: true})

  @ContentChild(NgControl, { static: true}) control?: NgControl

   get error():boolean {
    return Boolean(this.control?.invalid && this.control?.touched && this.formGroupDirective?.submitted )
   }

  errorMessage(): string {
    const error = this.control?.errors
    console.log({error});
    if(!error) return ''

    if(error['required']) return 'This field is required';
    if(error['email']) return 'Email not valid';
    if(error['minlength']) return 'The text length is not enogth';
     
     return 'Call Sharvill'
    }
}

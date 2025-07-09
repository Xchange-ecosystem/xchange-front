import { Component, inject } from '@angular/core';
import { ToogleComponent } from '../toogle/toogle.component';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ToogleRadiusComponent } from '../toogle-radius/toogle-radius.component';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { JsonpClientBackend } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    ToogleComponent,
    InputComponent,
    TextareaComponent,
    ToogleRadiusComponent,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  fb = inject(FormBuilder)
exampleForm: FormGroup<any>;

constructor() {
  this.exampleForm= this.fb.group(
    {
      toogle: this.fb.control(''),
      input: this.fb.control(''),
      txarea: this.fb.control('primer valor'),
    }
  )
}


  handlerSubmit(event: Event){
    console.log(event);
  }
}

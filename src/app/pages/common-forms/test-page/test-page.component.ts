import { Component } from '@angular/core';
import { ToogleComponent } from '../toogle/toogle.component';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ToogleRadiusComponent } from '../toogle-radius/toogle-radius.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    ToogleComponent,
    InputComponent,
    TextareaComponent,
    ToogleRadiusComponent
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {

}

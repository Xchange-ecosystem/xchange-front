import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  selectedOption: 'login' | 'signup' = 'login';

  toggleSlide(option: 'login' | 'signup') {
    this.selectedOption = option;
  }
}

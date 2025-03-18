import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  selectedOption: 'login' | 'signup' = 'login';

  toggleSlide(option: 'login' | 'signup') {
    this.selectedOption = option;
  }
}

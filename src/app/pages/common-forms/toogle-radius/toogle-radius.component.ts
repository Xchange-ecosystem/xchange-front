import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { XcIconCheckComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-toogle-radius',
  standalone: true,
  imports: [
    NgIf,
    XcIconCheckComponent
  ],
  templateUrl: './toogle-radius.component.html',
  styleUrl: './toogle-radius.component.scss'
})
export class ToogleRadiusComponent {
  checked = false;
  toggle() {
    this.checked = !this.checked;
  }
}

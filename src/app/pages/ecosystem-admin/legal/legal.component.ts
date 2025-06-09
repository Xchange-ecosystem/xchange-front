import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconSaveComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [
    XcIconSaveComponent
  ],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {

}

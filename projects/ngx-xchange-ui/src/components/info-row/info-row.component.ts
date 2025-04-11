import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-info-row',
  standalone: true,
  imports: [],
  templateUrl: './info-row.component.html',
  styleUrl: './info-row.component.css'
})
export class InfoRowComponent {
  @Input() label: string = ''; 
  @Input() value: number = 0;
}

import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-objectives-dropdown',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './objectives-dropdown.component.html',
  styleUrl: './objectives-dropdown.component.scss'
})
export class ObjectivesDropdownComponent {
  @Input() title: string = 'Add Objective to Goal';
  @Input() dimension: string = 'Business';
  @Input() category: string = 'Roadmap and structure';
  @Input() options: string[] = ['Project definition', 'Vision, Mission, Strategy'];

  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}

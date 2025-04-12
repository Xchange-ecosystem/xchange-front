import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'xc-section-tab',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './section-tab.component.html',
  styleUrl: './section-tab.component.css'
})
export class SectionTabComponent {
  activeSection: string = 'Apperance';

  @Input() sections: { name: string, hasNotifications: boolean }[] = [];
  @Output() sectionSelected: EventEmitter<string> = new EventEmitter<string>();

  selectSection(section: string): void {
    this.activeSection = section;
    this.sectionSelected.emit(section);
    console.log("desde section-tab", section);
  }
}

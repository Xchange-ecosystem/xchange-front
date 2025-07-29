import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CopyStylesDirective } from '../../directives/copy-styles/copy-styles.directive';

@Component({
  selector: 'xc-section-tab',
  standalone: true,
  imports: [
    NgFor, 
    NgIf,
    CopyStylesDirective
  ],
  templateUrl: './section-tab.component.html',
  styleUrl: './section-tab.component.css'
})
export class SectionTabComponent {
  @Input() sections: { name: string, hasNotifications: boolean }[] = [];
  @Input() activeSection: string = '';
  @Output() sectionSelected: EventEmitter<string> = new EventEmitter<string>();
  
  
  selectSection(section: string): void {
    this.activeSection = section;
    this.sectionSelected.emit(section);
  }
}

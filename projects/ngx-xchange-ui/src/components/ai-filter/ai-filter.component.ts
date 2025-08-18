import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { XcIconAngleDownComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'xc-ai-filter',
  standalone: true,
  imports: [NgIf, CommonModule, XcIconAngleDownComponent],
  templateUrl: './ai-filter.component.html',
  styleUrls: ['./ai-filter.component.css']
})
export class AiFilterComponent implements OnInit {
  @Input() label = "";
  @Input() case = "";
  @Input() options: string[] = [];
  @Input() notification: boolean = false;
  @Input() selectedOption: string | null = null;
  @Input() isOpen = false;
  @Output() optionSelected = new EventEmitter<string>();
  @Output() openDropdown = new EventEmitter<void>();


  predefinedOptions: { [key: string]: string[] } = {
    state: ['Active', 'Inactive', 'Pending'],
    role: ['Admin', 'User', 'Guest'],
    date: ['Today', 'Yesterday', 'Last Week']
  };

  ngOnInit(): void {
    if (this.case && this.predefinedOptions[this.case]) {
      this.options = this.predefinedOptions[this.case];
    }
  }

  toggleDropdown(): void {
    this.openDropdown.emit();
  }
  selectOption(option: string, event: Event): void {
    event.stopPropagation();
    this.selectedOption = option;
    this.optionSelected.emit(option);
    this.isOpen = false;
  }
}

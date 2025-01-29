import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'xc-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
    standalone: false
})

export class DetailsComponent {
  @Input() title: string = '';
  @Input() isOpen!: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleIsClose() {
    this.isOpen = !this.isOpen
    this.isOpenChange.emit(this.isOpen)
  }
}

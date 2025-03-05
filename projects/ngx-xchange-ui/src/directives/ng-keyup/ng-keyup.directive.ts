import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';

@Directive({
  selector: '[xcNgKeyup]',
  standalone: false
})
export class NgKeyupDirective {

  private el = inject(ElementRef)
  @Input('xcNgKeyup') key: string = 'Enter'
  @Output() onKeyUp = new EventEmitter<void>();

  constructor() { }

  @HostListener('keyup', ['$event'])
  handleKeyup(event: KeyboardEvent) {
    if(event.key === this.key) {
      event.preventDefault();
      if(this.onKeyUp){
        this.onKeyUp.emit();
      }
    }
  }
}

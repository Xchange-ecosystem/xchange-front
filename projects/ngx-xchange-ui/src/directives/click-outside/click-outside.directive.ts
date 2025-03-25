import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private elf = inject(ElementRef);
  @Output() onClickOutside = new EventEmitter<void>();

  constructor() {}
  @HostListener('document:focusin', ['$event'])
  clickOutside(event: Event) {
    event.preventDefault()
    if (!this.elf.nativeElement.contains(event.target)) {
      this.onClickOutside.emit()
    }
  }
}

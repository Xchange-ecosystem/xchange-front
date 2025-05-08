import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private elf = inject(ElementRef);
  @Output() onClickOutside = new EventEmitter<void>();

  constructor() {}
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const path = event.composedPath()
    if (!path.includes(this.elf.nativeElement)) {
      this.onClickOutside.emit()
    }
  }
}

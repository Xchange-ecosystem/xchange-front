import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[xcNonScroll]',
  standalone: true
})
export class NonScrollDirective {

  constructor() { }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event){
    event.preventDefault();
    }
}

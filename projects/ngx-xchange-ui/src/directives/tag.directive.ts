import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[xcTag]'
})
export class TagDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
 }

}

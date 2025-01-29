import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[xcTag]',
    standalone: false
})
export class TagDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
 }

}

import { Directive, ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[xcProfileHeader]',
  standalone: true
})
export class ProfileHeaderDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applyStyles()
  }

  private applyStyles() {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'display', 'flex');
    this.renderer.setStyle(element, 'flex-direction', 'column');
    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'border-radius', '16px');
    this.renderer.setStyle(element, 'width', '100%');
  }
}

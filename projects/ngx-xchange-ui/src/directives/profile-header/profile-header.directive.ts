import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcProfileHeader]',
  standalone: true
})
export class ProfileHeaderDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyles();
  }
  private setStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', 'column');
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
  }
}

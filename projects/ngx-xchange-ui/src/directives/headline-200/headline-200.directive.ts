import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcHeadline200]',
  standalone: true
})
export class Headline200Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--xc-black400)');
    this.renderer.setStyle(this.el.nativeElement, 'line-height', '20px');
  }
}

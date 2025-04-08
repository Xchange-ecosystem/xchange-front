import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcHeadline300]',
  standalone: true
})
export class Headline300Directive {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '18px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--xc-black400)');
    this.renderer.setStyle(this.el.nativeElement, 'line-height', '24px');
  }
}

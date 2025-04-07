import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcCopy300]',
  standalone: true
})
export class Copy300Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'var(--xc-black400)');
    this.renderer.setStyle(this.el.nativeElement, 'font-style', 'normal');
    this.renderer.setStyle(this.el.nativeElement, 'line-height', '20px');

  }
}

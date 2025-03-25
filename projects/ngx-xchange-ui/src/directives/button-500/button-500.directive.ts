import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcButton500]',
  standalone: true
})
export class Button500Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'var(--xc-gradient-light-grey-on-white)');
    this.renderer.setStyle(this.el.nativeElement, 'width', '60px');
    this.renderer.setStyle(this.el.nativeElement, 'height', '60px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '8px 14px');
    this.renderer.setStyle(this.el.nativeElement, 'stroke', 'black');
  }
}

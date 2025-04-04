import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[xcCardMeasures]',
  standalone: true
})
export class CardMeasuresDirective{


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyles();
  }

  private setStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', 'column');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'space-between');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'gap', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '28px');
    this.renderer.setStyle(this.el.nativeElement, 'max-width', '480px');
    this.renderer.setStyle(this.el.nativeElement, 'height', '420px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'var(--xc-white)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0px 0px 30px rgba(17, 17, 17, 0.05)');
  }
}

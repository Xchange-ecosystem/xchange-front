import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcCardMeasures]',
  standalone: true
})
export class CardMeasuresDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyles();
  }

  private setStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', 'column');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'space-between');
    this.renderer.setStyle(this.el.nativeElement, 'gap', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '32px');
  }
}

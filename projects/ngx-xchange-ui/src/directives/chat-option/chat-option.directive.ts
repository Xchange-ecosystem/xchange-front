import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcChatOption]',
  standalone: true
})
export class ChatOptionDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyles();
  }

  private setStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', 'var(--xc-boxShadow-400)');
  }
}

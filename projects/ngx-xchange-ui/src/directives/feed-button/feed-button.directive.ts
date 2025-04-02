import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcFeedButton]',
  standalone: true
})
export class FeedButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }
  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid var(--xc-grey100)');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700');
    this.renderer.setStyle(this.el.nativeElement, 'gap', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'center');
  }
}

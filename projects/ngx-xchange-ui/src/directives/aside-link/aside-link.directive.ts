import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcAsideLink]', 
  standalone: true
})
export class AsideLinkDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setDefaultStyles();
  }
  private setDefaultStyles() {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'display', 'flex');
    this.renderer.setStyle(element, 'alignItems', 'center');
    this.renderer.setStyle(element, 'padding', '16px');
    this.renderer.setStyle(element, 'textDecoration', 'none');
    this.renderer.setStyle(element, 'color', 'black');
    this.renderer.setStyle(element, 'borderRadius', '8px');
    this.renderer.setStyle(element, 'gap', '8px');
    this.renderer.setStyle(element, 'alignSelf', 'stretch');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeStyle(this.el.nativeElement, 'background');
  }
}
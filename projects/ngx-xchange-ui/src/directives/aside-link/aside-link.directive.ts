import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcAsideLink]', 
  standalone: true
})
export class AsideLinkDirective {
  private isSelected: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setDefaultStyles();
  }
  private setDefaultStyles() {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'display', 'flex');
    this.renderer.setStyle(element, 'alignItems', 'center');
    this.renderer.setStyle(element, 'justifyContent', 'space-between');
    this.renderer.setStyle(element, 'padding', '16px');
    this.renderer.setStyle(element, 'textDecoration', 'none');
    this.renderer.setStyle(element, 'color', 'black');
    this.renderer.setStyle(element, 'borderRadius', '10px');
    this.renderer.setStyle(element, 'gap', '8px');
    this.renderer.setStyle(element, 'alignSelf', 'stretch');
    
  }

  @HostListener('mouseover') onMouseOver() {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'cursor', 'pointer');
    this.renderer.setStyle(element, 'boxShadow', 'var(--xc-boxShadow-500)');
    this.renderer.setStyle(element, 'border', '1px solid var(--xc-boxShadow-500)');
  }

  @HostListener('mouseout') onMouseOut() {
    const element = this.el.nativeElement;
    this.renderer.removeStyle(element, 'boxShadow');
    this.renderer.removeStyle(element, 'border');
  }

}
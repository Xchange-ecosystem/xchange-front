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
    const wrapper = this.el.nativeElement.querySelector('.wrapper');
    const iconWrapper = this.el.nativeElement.querySelector('.icon-wrapper');
    const iconSpan = this.el.nativeElement.querySelector('.icon-span');

    if (wrapper) {
      this.renderer.setStyle(wrapper, 'display', 'flex');
      this.renderer.setStyle(wrapper, 'width', '100%');
      this.renderer.setStyle(wrapper, 'boxShadow', '0px 0px 30px 0px rgba(17, 17, 17, 0.05)');
    }

    if (iconWrapper) {
      this.renderer.setStyle(iconWrapper, 'display', 'flex');
      this.renderer.setStyle(iconWrapper, 'justifyContent', 'center');
      this.renderer.setStyle(iconWrapper, 'alignItems', 'center');
      this.renderer.setStyle(iconWrapper, 'padding', '12px');
      this.renderer.setStyle(iconWrapper, 'gap', '10px');
    }

    if (iconSpan) {
      this.renderer.setStyle(iconSpan, 'width', '40px');
      this.renderer.setStyle(iconSpan, 'height', '40px');
      this.renderer.setStyle(iconSpan, 'borderRadius', '32px');
      this.renderer.setStyle(iconSpan, 'padding', '10px');
      this.renderer.setStyle(iconSpan, 'background', 'var(--xc-gradient-medium-green)');
      this.renderer.setStyle(iconSpan, 'fill', 'white');
      this.renderer.setStyle(iconSpan, 'stroke', 'white');
    }
  }
}

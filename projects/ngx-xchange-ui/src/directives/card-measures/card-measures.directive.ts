import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { APP_CSS_STYLES } from './styles';

@Directive({
  selector: '[xcCardMeasures]',
  standalone: true
})
export class CardMeasuresDirective{
  @HostBinding('class')private cssClass = '';
  @Input() set xcCardMeasures(klass: string | number) {
    this.cssClass = APP_CSS_STYLES[klass] || APP_CSS_STYLES['userCard'];
  }
  // constructor(private el: ElementRef, private renderer: Renderer2) {
  //   this.setStyles();
  // }

  // private setStyles(): void {
  //   this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
  //   this.renderer.setStyle(this.el.nativeElement, 'flex-direction', 'column');
  //   this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'space-between');
  //   this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
  //   this.renderer.setStyle(this.el.nativeElement, 'gap', '16px');
  //   this.renderer.setStyle(this.el.nativeElement, 'padding', '32px 32px 24px 32px');
  //   this.renderer.setStyle(this.el.nativeElement, 'width', '500px');
  //   this.renderer.setStyle(this.el.nativeElement, 'height', '500px');
  //   this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
  //   this.renderer.setStyle(this.el.nativeElement, 'background', 'var(--xc-white)');
  //   this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0px 0px 30px rgba(17, 17, 17, 0.05)');
  // }
}

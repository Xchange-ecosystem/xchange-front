import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcNotificationBubble]',
  standalone: true
})
export class NotificationBubbleDirective {
  @Input() notification: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }
  private setStyle() {
  this.renderer.setStyle(this.el.nativeElement, 'background', 'var(--xc-gradient-light-blue)');
  this.renderer.setStyle(this.el.nativeElement, 'border-radius', '64px');
  this.renderer.setStyle(this.el.nativeElement, 'min-width', '16px');
  this.renderer.setStyle(this.el.nativeElement, 'min-height', '16px');
}

}

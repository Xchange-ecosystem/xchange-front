import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcNotificationBubble]',
  standalone: true,
})
export class NotificationBubbleDirective {
  @Input() set xcNotificationBubble(value: boolean) {
    if (value) {
      this.applyStyles();
    } else {
      this.removeStyles();
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private applyStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'var(--xc-gradient-light-blue)');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '64px');
    this.renderer.setStyle(this.el.nativeElement, 'min-width', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'min-height', '16px');
  }

  private removeStyles() {
    this.renderer.removeStyle(this.el.nativeElement, 'background');
    this.renderer.removeStyle(this.el.nativeElement, 'border-radius');
    this.renderer.removeStyle(this.el.nativeElement, 'min-width');
    this.renderer.removeStyle(this.el.nativeElement, 'min-height');
  }
}

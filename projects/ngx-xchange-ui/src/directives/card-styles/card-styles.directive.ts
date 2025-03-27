import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcCardStyles]',
  standalone: true
})
export class CardStylesDirective implements OnInit {
  @Input() padding: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.setStyle();
  }

  private setStyle() {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'borderRadius', '8px');
    this.renderer.setStyle(element, 'padding', `${this.padding}px`);
  }
}

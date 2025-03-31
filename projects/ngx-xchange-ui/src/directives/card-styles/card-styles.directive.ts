import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcCardStyles]',
  standalone: true
})
export class CardStylesDirective implements OnInit {
  @Input() padding: number = 0;
  @Input() gap: number = 0;
  

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.setStyle();
  }

  private setStyle() {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'display', 'flex');
    this.renderer.setStyle(element, 'flex-direction', 'column');
    this.renderer.setStyle(element, 'borderRadius', '8px');
    this.renderer.setStyle(element, 'padding', `${this.padding}px`);
    this.renderer.setStyle(element, 'gap', `${this.gap}px`);
    this.renderer.setStyle(element, 'align-items', 'start');
    this.renderer.setStyle(element, 'max-width', '550px');
    this.renderer.setStyle(element, 'background', 'white');
  }
}

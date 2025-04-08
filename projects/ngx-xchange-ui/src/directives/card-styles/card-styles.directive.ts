import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcCardStyles]',
  standalone: true
})
export class CardStylesDirective implements OnInit {
  @Input() padding: number = 0;
  @Input() gap: number = 0;
  // Manu changes
  //TODO: check the style implementation

  //TODO: Implement inject rather than constructor ElementRef, example:
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() { }

  private readonly commonStyle: Partial<CSSStyleDeclaration> = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    padding: '0px',
    paddingInline: '32px',
    paddingTop: '32px',
    paddingBottom: '24px',
    gap: '16px',
    width: '500px',
    alignItems: 'center',
    background: 'white',
    height: '420px',
    maxHeight: '420px',
    boxShadow: 'var(--xc-boxShadow-400)',
    position: 'relative'
  };

  ngOnInit() {
    this.setStyle();
  }

  private setStyle(){
    const element = this.el.nativeElement;;
    const style = this.commonStyle;
    Object.entries(style).forEach(([prop, value]) => {
      this.renderer.setStyle(element, prop, value);
    });
  }

}

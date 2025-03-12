import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[xcProfileTags]',
  standalone: true,
})
export class ProfileTagsDirective implements OnInit, OnChanges {
  @Input() tagType: 'yellow' | 'gray'|'green' | 'purple' | 'accepted'  = 'gray'; // Valores permitidos

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setStyles(); // Aplica estilos al inicio
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tagType']) {
      this.setStyles(); // Aplica estilos cuando cambia `tagType`
    }
  }

  private setStyles(): void {
    // Estilos dinámicos según `tagType`
    switch (this.tagType) {
      case 'gray':
        this.renderer.setStyle(this.el.nativeElement,'background-color','var(--xc-grey100)');
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(this.el.nativeElement, 'font-size', 'var(--xc-Copy-200-Bold-font-size)');
        this.renderer.setStyle(this.el.nativeElement, 'color','var(--xc-grey500)');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'var(--xc-Copy-200-Bold-font-weight)');
        this.renderer.setStyle(this.el.nativeElement, 'line-height', 'var(--xc-Copy-200-Medium-line-Height)');
        this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
      break;
      case 'green':
        this.renderer.setStyle(this.el.nativeElement,'background-color','var(--xc-Completed)');
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '15%');
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(this.el.nativeElement, 'font-size', 'var(--xc-Copy-200-Bold-font-size)');
        this.renderer.setStyle(this.el.nativeElement, 'color','var(--xc-Completed)');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'var(--xc-Copy-200-Bold-font-weight)');
        this.renderer.setStyle(this.el.nativeElement, 'line-height', 'var(--xc-Copy-200-Medium-line-Height)');
      break;
      case 'yellow':
        this.renderer.setStyle(this.el.nativeElement,'background-color','var(--xc-Progress)');
        this.renderer.setStyle(this.el.nativeElement, 'display', 'relative');
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '50%');
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(this.el.nativeElement, 'font-size', 'var(--xc-Copy-200-Bold-font-size)');
        this.renderer.setStyle(this.el.nativeElement, 'color','var(--xc-Yellow-Tag)');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'var(--xc-Copy-200-Bold-font-weight)');
        this.renderer.setStyle(this.el.nativeElement, 'line-height', 'var(--xc-Copy-200-Medium-line-Height)');
      break;
      case 'purple':
        this.renderer.setStyle(this.el.nativeElement,'background-color','var(--xc-Suggestion)');
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(this.el.nativeElement, 'font-size', 'var(--xc-Copy-200-Bold-font-size)');
        this.renderer.setStyle(this.el.nativeElement, 'color','var(--xc-white)');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'var(--xc-Copy-200-Bold-font-weight)');
        this.renderer.setStyle(this.el.nativeElement, 'line-height', 'var(--xc-Copy-200-Medium-line-Height)');
      break;
      case 'accepted':
        this.renderer.setStyle(this.el.nativeElement,'background-color','var(--xc-Accepted)');
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(this.el.nativeElement, 'font-size','var(--xc-Tags-Font-14)');
        this.renderer.setStyle(this.el.nativeElement, 'color','var(--xc-white)');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'var(--xc-Copy-200-Bold-font-weight)');
        this.renderer.setStyle(this.el.nativeElement, 'line-height', 'var(--xc-Copy-200-Medium-line-Height)');
      break;
    }
  }
}

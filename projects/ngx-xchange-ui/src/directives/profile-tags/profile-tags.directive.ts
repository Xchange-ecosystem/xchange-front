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
  @Input() tagType: 'yellow' | 'gray' | 'green' | 'purple' | 'accepted' =
    'gray'; // Valores permitidos

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
        this.renderer.setStyle(
          this.el.nativeElement,
          'background-color',
          'var(--xc-grey100)'
        );
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-buttom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(
          this.el.nativeElement,
          'color',
          'var(--xc-grey500'
        );
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700'); // por var
        this.renderer.setStyle(this.el.nativeElement, 'line-height', '1.5');
        break;
      case 'green':
        this.renderer.setStyle(
          this.el.nativeElement,
          'background-color',
          'var(--xc-grey100)'
        );
        this.renderer.setStyle(this.el.nativeElement, 'padding-top', '6px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-buttom', '7px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-left', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
        this.renderer.setStyle(
          this.el.nativeElement,
          'color',
          'var(--xc-grey500'
        );
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700'); // por var
        this.renderer.setStyle(this.el.nativeElement, 'line-height', '1.5');
        break;
    }
  }
}

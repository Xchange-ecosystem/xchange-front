import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[xcProfileTags]',
  standalone: true,
})
export class ProfileTagsDirective implements OnChanges {
  @Input() xcProfileTags = '';

  private colorMap: Record<string, string> = {
    gray: 'var(--xc-grey100)',
    green: 'var(--xc-categories-completed-opacity)',
    purple: 'var(--xc-categories-suggestion)',
    yellow: 'var(--xc-categories-progress)',
    blue: '#47E3E366'
  };

  private textColorMap: Record<string, string> = {
    yellow: 'var(--xc-categories-yellow-tag)',
    blue: '#27ABAB',
    purple: 'var(--xc-white)',
    green: 'var(--xc-categories-completed)',
    default: 'var(--xc-grey500)',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['xcProfileTags']) {
      this.applyColor();
    }
  }

  private applyColor(): void {
    const color = this.xcProfileTags.toLowerCase();
    const backgroundColor = this.colorMap[color] || this.colorMap['default'];
    const textColor = this.textColorMap[color] || this.textColorMap['default'];

    this.renderer.setStyle(this.el.nativeElement, 'background-color', backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
    this.renderer.setStyle(this.el.nativeElement, 'padding', '7px 10px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '12px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700');

    if (color === 'yellow') {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.7');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'opacity');
    }
    
  }
}

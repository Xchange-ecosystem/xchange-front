import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

interface HeadlineStyle {
  default: Partial<CSSStyleDeclaration>;
}

@Directive({
  selector: '[xcHeadlineStyles]',
  standalone: true,
})
export class HeadlineStylesDirective implements OnInit, OnDestroy {
  private el = this.elementRef.nativeElement;
  private listeners: (() => void)[] = [];

  private readonly headlineStyles: Record<string, HeadlineStyle> = {
    'headline-100': {
      default: {
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '24px',
        color: 'var(--xc-black500)',
        textAlign: 'left',
      },
    },
    'headline-200': {
      default: {
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '28px',
        color: 'var(--xc-black500)',
        textAlign: 'left',
      },
    },
    'headline-300': {
      default: {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '24px',
        color: 'var(--xc-black500)',
        textAlign: 'left',
      },
    },
    'headline-400': {
      default: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '36px',
        color: 'var(--xc-black500)',
        textAlign: 'left',
      },
    },
    'headline-500': {
      default: {
        fontSize: '32px',
        fontWeight: '600',
        lineHeight: '38px',
        color: 'var(--xc-black500)',
        textAlign: 'left',
      },
    },
  };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyStyles();
  }

  ngOnDestroy() {
    this.listeners.forEach((removeListener) => removeListener());
  }

  private applyStyles() {
    const matchedClass = (Array.from(this.el.classList) as string[]).find(
      (cls) => this.headlineStyles.hasOwnProperty(cls)
    );

    if (!matchedClass) return;

    const styles = this.headlineStyles[matchedClass];

    // Apply default styles
    Object.entries(styles.default).forEach(([prop, value]) => {
      this.renderer.setStyle(this.el, prop, value);
    });
  }
}

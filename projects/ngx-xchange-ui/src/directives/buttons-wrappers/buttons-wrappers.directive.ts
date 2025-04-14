import {
  Directive,
  ElementRef,
  inject,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

interface ButtonStyle {
  default: Partial<CSSStyleDeclaration>;
  hover?: Partial<CSSStyleDeclaration>;
}

@Directive({
  selector: '[xcButtonsWrappers]',
  standalone: true,
})
export class ButtonsWrappersDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private render = inject(Renderer2);
  private listeners: (() => void)[] = [];

  private readonly commonStyles: Partial<CSSStyleDeclaration> = {
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
  };

  private readonly buttonStyles: Record<string, ButtonStyle> = {
    'button-default': {
      default: {
        borderRadius: '0.5rem',
        gap: '0.25rem',
        padding: '1rem',
        borderWidth: '2px',
        borderColor: 'var(--xc-black500)',
        height: '100%',
      },
      hover: {
        opacity: '0.6',
      },
    },
    'button-outline-inactive': {
      default: {
        opacity: '0.2',
        borderRadius: '0.5rem',
        gap: '0.25rem',
        padding: '1rem',
        cursor: 'default',
        height: '100%',
        borderWidth: '2px',
        borderColor: 'var(--xc-black500)',
      },
    },
    'button-cancel': {
      default: {
        borderRadius: '0.5rem',
        gap: '0.25rem',
        padding: '1rem',
        height: '100%',
        color: 'var(--xc-categories-blocked)',
        borderColor: 'var(--xc-categories-blocked)',
        borderWidth: '2px',
        fill: 'var(--xc-categories-blocked)',
      },
      hover: {
        opacity: '0.6',
      },
    },
    'button-cancel-filled': {
      default: {
        borderRadius: '0.5rem',
        gap: '0.25rem',
        padding: '1rem',
        color: 'white',
        height: '100%',
        borderColor: 'white',
        borderWidth: '2px',
        fill: 'white',
        backgroundColor: 'var(--xc-categories-blocked)',
      },
      hover: {
        opacity: '0.6',
      },
    },
    'button-filled': {
      default: {
        backgroundColor: 'var(--xc-black500)',
        color: 'white',
        borderRadius: '0.5rem',
        fill: 'white',
        height: '100%',
        padding: '10px 1rem',
        gap: '0.25rem',
      },
      hover: {
        backgroundColor: 'var(--xc-black400)',
      },
    },
    'button-filled-noHeight': {
      default: {
        backgroundColor: 'var(--xc-black500)',
        color: 'white',
        borderRadius: '0.5rem',
        fill: 'white',
        padding: '10px 1rem',
        gap: '0.25rem',
      },
      hover: {
        backgroundColor: 'var(--xc-black400)',
      },
    },
    'button-filled-inactive': {
      default: {
        backgroundColor: 'var(--xc-black500)',
        color: 'white',
        opacity: '0.2',
        borderRadius: '0.5rem',
        fill: 'white',
        height: '100%',
        gap: '0.25rem',
        padding: '10px 1rem',
        cursor: 'default',
      },
    },
    'button-round-options': {
      default: {
        width: '30px',
        height: '30px',
        backgroundColor: 'var(--xc-gradient-light-grey-on-white)',
        color: 'var(--xc-black500)',
        borderRadius: '9999px',
        padding: '0.5rem',
        border: 'none',
        fill: 'black',
      },
      hover: {
        backgroundColor: 'var(--xc-grey200)',
      },
    },
    'button-round-cancel': {
      default: {
        width: '30px',
        height: '30px',
        backgroundColor: 'var(--xc-gradient-light-grey-on-white)',
        color: 'var(--xc-black500)',
        borderRadius: '9999px',
        padding: '0.5rem',
        border: 'none',
        fill: 'black',
      },
      hover: {
        backgroundColor: 'var(--xc-grey200)',
      },
    },
    'button-round-checked-inactive': {
      default: {
        width: '34px',
        height: '34px',
        backgroundColor: 'white',
        borderRadius: '9999px',
        borderColor: 'var(--Grey300)',
        borderWidth: '2px',
      },
      hover: {
        borderColor: 'black',
        borderWidth: '2px',
      },
    },
    'button-round-checked': {
      default: {
        width: '34px',
        height: '34px',
        borderRadius: '9999px',
        border: 'none',
        backgroundColor: 'var(--xc-brand-light-green)',
        fill: 'var(--xc-categories-completed)',
        stroke: 'var(--xc-categories-completed)',
      },
    },
    'button-round-back': {
      default: {
        width: '30px',
        height: '30px',
        color: 'var(--xc-black500)',
        borderRadius: '9999px',
        padding: '0.5rem',
        border: 'none',
        fill: 'black',
        stroke: 'black',
      },
      hover: {
        backgroundColor: 'var(--xc-grey200)',
      },
    },
    'button-round-back-inactive': {
      default: {
        width: '30px',
        height: '30px',
        color: 'var(--Grey400)',
        borderRadius: '9999px',
        border: 'none',
        fill: 'var(--Grey400)',
        stroke: 'var(--Grey400)',
      },
    },
    'button-ai': {
      default: {
        padding: '1rem',
        borderRadius: '0.5rem',
        gap: '0.25rem',
        background: 'var(--xc-gradient-light-blue)',
        paddingLeft: '14px',
      },
      hover: {
        background: 'var(--xc-gradient-medium-green)',
      },
    },
    'button-round-close': {
      default: {
        alignSelf: 'flex-start',
        width: '30px',
        height: '30px',
        color: 'var(--xc-black500)',
        borderRadius: '9999px',
        background: 'white',
        border: 'none',
        fill: 'black',
        stroke: 'black',
      },
      hover: {
        backgroundColor: 'var(--xc-grey200)',
      },
    },
    'button-chat': {
      default: {
        display: 'flex',
        padding: '9px',
        justifyContent: 'center',
        background: 'var(--xc-gradient-light-grey-on-white)',
        borderRadius: '8px',
        width: '60px',
        height: '100%',
      },
    },
    'button-feed': {
      default: {
        display: 'flex',
        padding: '16px',
        justifyContent: 'center',
        borderWidth: '1px',
        borderColor: 'var(--xc-grey100)',
        borderRadius: '8px',
        gap: '8px',
        height: '40px',
      },
    },
    'button-feed-selected': {
      default: {
        display: 'flex',
        padding: '16px',
        justifyContent: 'center',
        borderWidth: '1px',
        borderColor: 'var(--xc-grey100)',
        borderRadius: '8px',
        backgroundColor: 'var(--xc-grey100)',
        gap: '8px',
        height: '40px',
      },
    },
    'button-refresh': {
      default: {
        padding: '9px',
        borderRadius: '9999px',
        background: 'var(--xc-gradient-light-blue)',
        width: '30px',
        height: '30px',
        alignSelf: 'center',
      },
    },
    'button-refresh-inactive': {
      default: {
        padding: '9px',
        borderRadius: '9999px',
        background: 'var(--xc-gradient-light-blue)',
        width: '30px',
        height: '30px',
        alignSelf: 'center',
        opacity: '0.3',
      },
    },
  };

  ngOnInit() {
    this.setStyles();
  }

  ngOnDestroy() {
    this.listeners.forEach((removeListener) => removeListener());
  }

  private setStyles() {
    const element = this.el.nativeElement;
    const matchedClass = (Array.from(element.classList) as string[]).find(
      (cls) => this.buttonStyles.hasOwnProperty(cls)
    );

    if (!element || !matchedClass) return;
    const styles = this.buttonStyles[matchedClass];

    // Apply common styles
    Object.entries(this.commonStyles).forEach(([prop, value]) => {
      this.render.setStyle(element, prop, value);
    });

    // Apply default styles
    Object.entries(styles.default).forEach(([prop, value]) => {
      this.render.setStyle(element, prop, value);
    });

    // Apply hover styles if they exist
    if (styles.hover) {
      const mouseenter = () => {
        Object.entries(styles.hover!).forEach(([prop, value]) => {
          this.render.setStyle(element, prop, value);
        });
      };

      const mouseleave = () => {
        Object.entries(styles.hover!).forEach(([prop]) => {
          this.render.setStyle(
            element,
            prop,
            styles.default[prop as keyof CSSStyleDeclaration] ?? ''
          );
        });
      };

      element.addEventListener('mouseenter', mouseenter);
      element.addEventListener('mouseleave', mouseleave);

      this.listeners.push(
        () => element.removeEventListener('mouseenter', mouseenter),
        () => element.removeEventListener('mouseleave', mouseleave)
      );
    }
  }
}

import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
    selector: '[xcParagraph]',
    standalone: false
})
export class ParagraphDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcParagraph(klasses: paragraphTypes) {
    this.twClasses = (!klasses ? 'main' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcParagraph(): String {
    return this.twClasses;
  }
}

type paragraphTypes = 'main' | 'secondary' | 'tertiary';
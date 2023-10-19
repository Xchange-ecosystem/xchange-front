import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
  selector: '[xcHeaderNav]'
})
export class HeaderNavDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcHeaderNav(klasses: headerNavTypes) {
    this.twClasses = (!klasses ? 'headerNav' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcHeaderNav(): String {
    return this.twClasses;
  }
}

type headerNavTypes = 'headerNav';
import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
  selector: '[xcAsideNav]'
})
export class AsideNavDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcAsideNav(klasses: asideNavTypes) {
    this.twClasses = (!klasses ? 'asideNav' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcAsideNav(): String {
    return this.twClasses;
  }

}

type asideNavTypes = 'asideNav';

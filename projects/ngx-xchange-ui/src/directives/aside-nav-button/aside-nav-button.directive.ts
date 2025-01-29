import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
    selector: '[xcAsideNavButton]',
    standalone: false
})
export class AsideNavButtonDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcAsideNavButton(klasses: asideNavButtonTypes) {
    this.twClasses = (!klasses ? 'asideNavButton' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcAsideNavButton(): String {
    return this.twClasses;
  }

}

type asideNavButtonTypes = 'asideNavButton';
import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
  selector: '[xcTag]'
})
export class TagDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcTag(klasses: tagTypes) {
    this.twClasses = (!klasses ? 'main' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcTag(): String {
    return this.twClasses;
  }

}

export type tagTypes = 'gray' | 'green' | 'yellow' | 'purple';
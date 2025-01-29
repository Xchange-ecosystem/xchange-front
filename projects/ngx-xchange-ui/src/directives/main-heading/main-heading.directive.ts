import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
    selector: '[xcMainHeading]',
    standalone: false
})
export class MainHeadingDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcMainHeading(klasses: headingTypes) {
    this.twClasses = (!klasses ? 'mainHeading' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcMainHeading(): String {
    return this.twClasses;
  }
}

type headingTypes =
  | 'mainHeading'
  | 'secondaryHeading'
  | 'tertiaryHeading'
  | 'fourthHeading'
  | 'Headline500'
  | 'Headline400'
  | 'Headline300'
  | 'Headline200'
  | 'Headline100'
  | 'Copy400Regular'
  | 'Copy400Medium'
  | 'Copy400Bold'
  | 'Copy300Medium'
  | 'Copy300Bold'
  | 'Copy200Medium'
  | 'Copy200Bold'
  | String;

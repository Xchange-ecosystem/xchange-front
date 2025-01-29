import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
    selector: '[xcTenantLogo]',
    standalone: false
})
export class TenantLogoDirective {
  private twClasses = '';
  @HostBinding('class')
  @Input()
  set xcTenantLogo(klasses: tenantLogoTypes) {
    this.twClasses = (!klasses ? 'tenantLogo' : klasses)
      .split(' ')
      .map((k) => APP_TAILWIND_STYLES[k] ?? k)
      .join(' ');
  }
  get xcTenantLogo(): String {
    return this.twClasses;
  }
}

type tenantLogoTypes = 'tenantLogo';
import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';


@Directive({
  selector: '[xcContainer]',
})
export class ContainerDirective {
private twClasses = ''
  @HostBinding('class')
  @Input()
  set xcButtonView(klasses: string){
    this.twClasses = klasses
    .split(' ')
    .map((k) => APP_TAILWIND_STYLES[k] ?? k)
    .join(' ')
  }

  get xcButtonView(): String{
    return this.twClasses
  }
  ngOnInit() {

  }
}

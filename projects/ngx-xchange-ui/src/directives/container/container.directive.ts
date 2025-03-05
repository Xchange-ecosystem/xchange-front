import { Directive, HostBinding, Input } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';


@Directive({
  selector: '[xcContainer]',
})
export class ContainerDirective {
private twClasses = ''
  @HostBinding('class')
  @Input()
  set xcContainer(klasses: containerTypes){
    this.twClasses = klasses
    .split(' ')
    .map((k) => APP_TAILWIND_STYLES[k] ?? k)
    .join(' ')
  }

  get xcContainer(): String{
    return this.twClasses
  }  
}
type containerTypes =
|'listSelector'
|'assignmentCard'
|'rightSideModal'
|'navigatorFilterContainer'

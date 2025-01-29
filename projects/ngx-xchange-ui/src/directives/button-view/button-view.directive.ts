import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
    selector: '[xcButtonView]',
    standalone: false
})
export class ButtonViewDirective implements OnInit {
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

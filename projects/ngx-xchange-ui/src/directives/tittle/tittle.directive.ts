import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { APP_TAILWIND_STYLES } from './styles';

@Directive({
  selector: '[xcTittle]',
})
export class TittleDirective implements OnInit {
  private twClasses = ''
  // constructor(private el: ElementRef) { }

  @HostBinding('class')
  @Input()
  set xcTittle(klasses: string){
    this.twClasses = klasses
    .split(' ')
    .map((k) => APP_TAILWIND_STYLES[k] ?? k)
    .join(' ')
  }

  get xcTittle(): String{
    return this.twClasses
  }
  ngOnInit() {
  //  this.el.nativeElement.style.backgroundColor = 'yellow';
    // this.el.nativeElement.class = 'button';
  }

}
